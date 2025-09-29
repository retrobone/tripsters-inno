
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { DestinationCard } from '@/components/destination-card';
import { destinations } from '@/lib/data';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Explore Ziro Valley
        </h1>
        <p className="text-muted-foreground">
          Let&apos;s start your next adventure in Arunachal Pradesh.
        </p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search for villages, treks, or viewpoints..."
          className="pl-10 h-12 text-lg"
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold font-headline mb-4">Popular Spots in Ziro</h2>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {destinations.map((dest) => (
              <CarouselItem key={dest.id} className="md:basis-1/2 lg:basis-1/3">
                <DestinationCard destination={dest} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-primary/80 to-primary text-primary-foreground">
          <CardHeader>
            <CardTitle>Ziro Music Festival Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Ready for the festival? Get tips on passes, stays, and what to expect!</p>
            <Button variant="secondary" className="mt-4">View Guide</Button>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-accent/80 to-accent text-accent-foreground">
          <CardHeader>
            <CardTitle>AI-Powered Itineraries</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Don&apos;t know where to start? Let our AI plan the perfect Ziro trip for you.</p>
            <Button variant="secondary" className="mt-4" asChild>
                <Link href="/plan">Plan My Trip</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
