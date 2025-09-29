
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
    slug: 'talley-valley-sanctuary',
    name: 'Talley Valley Wildlife Sanctuary',
    country: 'Arunachal Pradesh',
    description: 'A pristine bio-diversity hot-spot with lush forests.',
    longDescription:
      'A vast expanse of subtropical and alpine forests, Talley Valley is a trekker\'s paradise. It is home to a variety of flora and fauna, including the clouded leopard. The trek through the valley is challenging but rewards with breathtaking views and an untouched natural environment.',
    rating: 4.8,
    reviews: 350,
    pricePerNight: 1500,
    category: 'Nature',
    tags: ['trekking', 'adventure', 'nature'],
    imageId: 'ziro-talley-valley',
    position: { lat: 27.575, lng: 93.95 },
  },
  {
    id: 2,
    slug: 'hong-village',
    name: 'Hong Village',
    country: 'Arunachal Pradesh',
    description: 'One of the largest and most picturesque Apatani villages.',
    longDescription:
      'Experience the unique culture of the Apatani tribe in Hong Village. The village is a dense settlement of traditional stilt houses, surrounded by meticulously planned rice-fish farms. It offers a deep dive into the sustainable lifestyle and customs of the Apatani people.',
    rating: 4.9,
    reviews: 500,
    pricePerNight: 2000,
    category: 'Cultural Village',
    tags: ['culture', 'apatani', 'homestay'],
    imageId: 'ziro-hong-village',
    position: { lat: 27.5246, lng: 93.8153 },
  },
  {
    id: 3,
    slug: 'kile-pakho',
    name: 'Kile Pakho',
    country: 'Arunachal Pradesh',
    description: 'A ridge offering panoramic views of the Ziro plateau.',
    longDescription:
      'A short trek up to Kile Pakho rewards you with a stunning panoramic view of the entire Ziro plateau on one side and the majestic Himalayan snow-clad mountains on the other. It is an ideal spot for photography and to get a sense of the vastness of the landscape.',
    rating: 4.7,
    reviews: 280,
    pricePerNight: 0,
    category: 'Viewpoint',
    tags: ['viewpoint', 'trekking', 'scenic'],
    imageId: 'ziro-kile-pakho',
    position: { lat: 27.625, lng: 93.845 },
  },
  {
    id: 4,
    slug: 'midey-trek',
    name: 'Midey (Hidden Gem)',
    country: 'Arunachal Pradesh',
    description: 'An unexplored trek through dense bamboo groves.',
    longDescription:
      'For those seeking solitude and an offbeat adventure, Midey is a must-visit. This place is known for its giant blue-hued pine trees and dense bamboo forests. The trek is serene and takes you deep into the heart of Ziro\'s natural beauty, far from the tourist crowds.',
    rating: 4.6,
    reviews: 95,
    pricePerNight: 0,
    category: 'Adventure',
    tags: ['trekking', 'nature', 'unexplored'],
    imageId: 'ziro-midey-trek',
    position: { lat: 27.5, lng: 93.8 },
  },
  {
    id: 5,
    slug: 'ziro-puto',
    name: 'Ziro Puto',
    country: 'Arunachal Pradesh',
    description: 'A historic hillock where the first administrative centre was set up.',
    longDescription:
      'Also known as Army Puto, this small hillock holds historical significance as the location of the first administrative centre post-independence. It offers a great view of the old Ziro town and is a perfect spot for a quiet evening stroll amidst pine trees.',
    rating: 4.5,
    reviews: 150,
    pricePerNight: 0,
    category: 'Historic Site',
    tags: ['history', 'viewpoint', 'scenic'],
    imageId: 'ziro-puto',
    position: { lat: 27.595, lng: 93.83 },
  },
  {
    id: 6,
    slug: 'siiro-village',
    name: 'Siiro Village (Hidden Gem)',
    country: 'Arunachal Pradesh',
    description: 'A quaint village offering an authentic Apatani experience.',
    longDescription:
      'One of the lesser-known villages in Ziro, Siiro offers a more intimate and authentic glimpse into Apatani life. The hosts are welcoming, and a walk through the village reveals the intricate details of their traditional homes and customs without the commercial feel of more popular spots.',
    rating: 4.8,
    reviews: 75,
    pricePerNight: 1800,
    category: 'Cultural Village',
    tags: ['culture', 'homestay', 'unexplored'],
    imageId: 'ziro-siiro-village',
    position: { lat: 27.56, lng: 93.84 },
  },
  {
    id: 7,
    slug: 'tarin-fish-farm',
    name: 'Tarin Fish Farm',
    country: 'Arunachal Pradesh',
    description: 'A showcase of traditional high-altitude pisciculture.',
    longDescription:
      'Located in the middle of vast paddy fields, the Tarin Fish Farm is a perfect example of the Apatani tribe\'s sustainable farming practices. Here, two crops of rice and one crop of fish (Ngihi) are raised together in the irrigated fields. It\'s a fascinating and picturesque sight.',
    rating: 4.6,
    reviews: 320,
    pricePerNight: 100,
    category: 'Agri-tourism',
    tags: ['culture', 'scenic', 'sustainable'],
    imageId: 'ziro-tarin-farm',
    position: { lat: 27.54, lng: 93.82 },
  },
  {
    id: 8,
    slug: 'dilopolyang-maniipolyang',
    name: 'Dilopolyang Maniipolyang (Hidden Gem)',
    country: 'Arunachal Pradesh',
    description: 'Mythical twin hillocks perfect for a short, scenic trek.',
    longDescription:
      'These twin hillocks hold a special place in local folklore and offer a gentle trekking opportunity. The path is less trodden, and the top provides a serene view of the surrounding paddy fields and villages. It\'s an ideal spot for visitors looking for peace and a touch of local mythology.',
    rating: 4.7,
    reviews: 60,
    pricePerNight: 0,
    category: 'Viewpoint',
    tags: ['trekking', 'unexplored', 'mythology'],
    imageId: 'ziro-twin-hills',
    position: { lat: 27.51, lng: 93.8 },
  },
];

export const getImageForDestination = (destination: Destination) => {
  const image = placeholderImages.placeholderImages.find((img) => img.id === destination.imageId);
  return (
    image || {
      imageUrl: 'https://picsum.photos/seed/ziro-default/600/400',
      description: 'Default placeholder image of Ziro Valley',
      imageHint: 'Ziro valley',
    }
  );
};
