
'use client';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import { destinations } from '@/lib/data';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ListFilter, AlertTriangle } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function ExplorePage() {
  const [selectedDestination, setSelectedDestination] = useState<typeof destinations[0] | null>(null);
  const center = { lat: 27.55, lng: 93.83 }; // Centered on Ziro
  const categories = [...new Set(destinations.map((d) => d.category))];
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <div className="flex flex-col h-[calc(100vh-100px)]">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-headline">
            Explore Ziro
          </h1>
          <p className="text-muted-foreground">
            Find your next adventure on the map.
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <ListFilter className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Filter
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Filter by category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categories.map((category) => (
              <DropdownMenuCheckboxItem key={category}>
                {category}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Card className="flex-grow overflow-hidden relative rounded-xl flex items-center justify-center">
        {!apiKey || apiKey === 'YOUR_GOOGLE_MAPS_API_KEY' ? (
          <div className="text-center text-muted-foreground p-8">
            <AlertTriangle className="mx-auto h-12 w-12 mb-4 text-destructive" />
            <h2 className="text-xl font-semibold text-foreground">Google Maps API Key is Missing</h2>
            <p className="mt-2 max-w-md mx-auto">
              To display the map, please get an API key from the Google Cloud Console and add it to the `.env.local` file as `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`.
            </p>
            <p className="mt-2 text-sm">
              After adding the key, you must restart your development server.
            </p>
          </div>
        ) : (
          <>
            <APIProvider apiKey={apiKey}>
              <Map
                defaultCenter={center}
                defaultZoom={12}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                mapId="a3a2d7b1e8a94a9a"
              >
                {destinations.map((dest) => (
                  <AdvancedMarker
                    key={dest.id}
                    position={dest.position}
                    onClick={() => setSelectedDestination(dest)}
                  />
                ))}
              </Map>
            </APIProvider>
            {selectedDestination && (
              <Card className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">{selectedDestination.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {selectedDestination.description}
                    </p>
                  </div>
                  <Badge variant="default">{selectedDestination.category}</Badge>
                </div>
                <div className="flex gap-2 mt-2">
                  {selectedDestination.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button asChild size="sm" className="mt-4 w-full">
                  <Link href={`/destinations/${selectedDestination.slug}`}>
                    View Details
                  </Link>
                </Button>
              </Card>
            )}
          </>
        )}
      </Card>
    </div>
  );
}
