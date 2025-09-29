
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { aiRecommendedItineraries } from '@/ai/flows/ai-recommended-itineraries';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Bot, Wand2 } from 'lucide-react';
import PlaneLoader from '@/components/icons/plane-loader';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  destination: z.string().min(2, {
    message: 'Destination must be at least 2 characters.',
  }),
  duration: z.string().min(1, {
    message: 'Please enter trip duration.',
  }),
  preferences: z.string().min(10, {
    message: 'Tell us a bit more about what you like.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function PlanPage() {
  const [itinerary, setItinerary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destination: 'Ziro, Arunachal Pradesh',
      duration: '3',
      preferences: 'I want a mix of culture and light trekking. Interested in seeing the Apatani lifestyle and finding some good photo spots. Not looking for anything too strenuous.',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setItinerary(null);
    try {
      const result = await aiRecommendedItineraries(values);
      setItinerary(result.itinerary);
    } catch (error) {
      console.error('Failed to generate itinerary:', error);
      toast({
        variant: 'destructive',
        title: 'Oh no! Something went wrong.',
        description: 'There was a problem generating your itinerary. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <Bot className="h-12 w-12 mx-auto text-primary mb-2" />
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          AI Trip Planner for Ziro
        </h1>
        <p className="text-muted-foreground">
          Describe your ideal Ziro trip and let our AI build the perfect itinerary for you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="destination"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Destination</FormLabel>
                    <FormControl>
                      <Input {...field} readOnly />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Duration (in days)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 3" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="preferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Preferences</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us your interests, budget, and who you're travelling with..."
                        className="resize-none"
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      The more detail, the better the plan! For example: "I love trekking and want to experience local food".
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                <Wand2 className="mr-2 h-4 w-4" />
                {isLoading ? 'Generating...' : 'Generate Itinerary'}
              </Button>
            </form>
          </Form>
        </div>

        <div className="flex items-center justify-center">
          {isLoading ? (
            <PlaneLoader />
          ) : itinerary ? (
            <Card className="w-full h-full max-h-[600px] overflow-y-auto">
              <CardContent className="p-6 prose dark:prose-invert prose-sm max-w-none">
                <h2 className="font-headline">Your Personalized Ziro Itinerary</h2>
                <div dangerouslySetInnerHTML={{ __html: itinerary.replace(/\\n/g, '<br />') }} />
              </CardContent>
            </Card>
          ) : (
            <Card className="w-full h-full flex items-center justify-center text-center p-8 bg-muted/50 border-dashed">
              <div>
                <h3 className="font-semibold text-lg">Your itinerary will appear here</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Fill out the form to get started.
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
