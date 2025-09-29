
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Compass, Bot } from 'lucide-react';
import Logo from '@/components/icons/logo';
import placeholderImages from '@/lib/placeholder-images.json';

export default function LandingPage() {
  const heroImage = placeholderImages.placeholderImages.find((img) => img.id === 'landing-hero');

  return (
    <div className="flex flex-col min-h-screen">
      <header className="absolute top-0 left-0 w-full z-10 p-4 sm:p-6">
        <nav className="container mx-auto flex justify-between items-center">
          <Logo className="h-8 w-auto text-white" />
          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="ghost" className="text-white hover:bg-white/20" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
          <Image
            src={heroImage?.imageUrl || "https://picsum.photos/seed/100/1920/1080"}
            alt={heroImage?.description || "Lush green Ziro valley"}
            data-ai-hint={heroImage?.imageHint || "Ziro valley"}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg font-headline">
              Discover the Soul of Ziro
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90 drop-shadow-sm">
              Unearth the hidden gems, vibrant culture, and breathtaking landscapes of Arunachal's tranquil paradise.
            </p>
            <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href="/dashboard">Explore Ziro</Link>
            </Button>
          </div>
        </section>

        <section id="features" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Your Ziro Adventure, Simplified</h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg">
              From hidden valleys to vibrant festivals, everything you need for an unforgettable journey.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 bg-accent/20 rounded-full w-max mb-4">
                    <Compass className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold font-headline">Explore Hidden Gems</h3>
                  <p className="mt-2 text-muted-foreground">
                    Discover secret viewpoints, serene villages, and untouched forests curated by local experts.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 bg-primary/20 rounded-full w-max mb-4">
                    <Bot className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-headline">AI-Powered Planning</h3>
                  <p className="mt-2 text-muted-foreground">
                    Let our AI create a personalized itinerary for your Ziro trip based on your interests and travel style.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 bg-secondary/20 rounded-full w-max mb-4">
                    <Briefcase className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold font-headline">Experience Apatani Culture</h3>
                  <p className="mt-2 text-muted-foreground">
                    Find homestays, learn about sustainable living, and immerse yourself in the unique Apatani traditions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted border-t">
        <div className="container mx-auto py-6 px-4 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Tripsters. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
