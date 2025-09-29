import placeholderImages from './placeholder-images.json';

export type Destination = {
  id: number;
  slug: string;
  name: string;
  country: string;
  description: string;
  longDescription: string;
  rating: number;
  reviews: number;
  pricePerNight: number;
  category: string;
  tags: string[];
  imageId: string;
  position: { lat: number; lng: number };
};

export const destinations: Destination[] = [
  {
    id: 1,
    slug: 'ziro-india',
    name: 'Ziro',
    country: 'India',
    description: 'A picturesque valley and a UNESCO World Heritage Site.',
    longDescription:
      'Ziro is a picturesque valley in the Lower Subansiri district of Arunachal Pradesh, India. It is known for its stunning natural beauty, lush green rice fields, and the unique culture of the Apatani tribe. Ziro is a UNESCO World Heritage Site and is a popular destination for nature lovers, adventure enthusiasts, and those interested in cultural tourism.',
    rating: 4.8,
    reviews: 1200,
    pricePerNight: 5500,
    category: 'Cultural Heritage',
    tags: ['unesco', 'tribal', 'nature'],
    imageId: 'ziro',
    position: { lat: 27.63, lng: 93.83 },
  },
];

export const getImageForDestination = (destination: Destination) => {
  const image = placeholderImages.placeholderImages.find((img) => img.id === destination.imageId);
  return (
    image || {
      imageUrl: 'https://picsum.photos/seed/default/600/400',
      description: 'Default placeholder image',
      imageHint: 'landscape',
    }
  );
};
