export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  images: string[];
  inStock: boolean;
  featured?: boolean;
  trending?: boolean;
  tags?: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Radiance Vitamin C Serum',
    description: 'A powerful brightening serum with 20% pure Vitamin C to reduce dark spots and boost radiance. This lightweight formula absorbs quickly and delivers visible results in just 2 weeks.',
    price: 48.00,
    originalPrice: 65.00,
    category: 'Skin Care',
    brand: 'GlowLux',
    rating: 4.8,
    reviews: 1247,
    images: [
      'https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    inStock: true,
    featured: true,
    trending: true,
    tags: ['brightening', 'anti-aging', 'vitamin-c']
  },
  {
    id: '2',
    name: 'Hydrating Rose Water Mist',
    description: 'Refreshing facial mist infused with pure rose water and hyaluronic acid. Perfect for hydrating and setting makeup throughout the day.',
    price: 24.00,
    category: 'Skin Care',
    brand: 'Pure Botanics',
    rating: 4.6,
    reviews: 892,
    images: [
      'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4041394/pexels-photo-4041394.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    inStock: true,
    featured: true,
    tags: ['hydrating', 'refreshing', 'rose']
  },
  {
    id: '3',
    name: 'Luxury Silk Hair Mask',
    description: 'Deep conditioning treatment with silk proteins and argan oil. Transforms dry, damaged hair into silky smooth perfection.',
    price: 36.00,
    originalPrice: 48.00,
    category: 'Hair Care',
    brand: 'Silk & Shine',
    rating: 4.9,
    reviews: 2103,
    images: [
      'https://images.pexels.com/photos/4046314/pexels-photo-4046314.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    inStock: true,
    trending: true,
    tags: ['hair-mask', 'repairing', 'argan-oil']
  },
  {
    id: '4',
    name: 'Velvet Matte Lipstick - Rouge',
    description: 'Long-lasting matte lipstick with a velvety smooth finish. Enriched with vitamin E and shea butter for all-day comfort.',
    price: 22.00,
    category: 'Makeup',
    brand: 'ColorStudio',
    rating: 4.7,
    reviews: 1456,
    images: [
      'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2533271/pexels-photo-2533271.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    inStock: true,
    featured: true,
    tags: ['lipstick', 'matte', 'long-lasting']
  },
  {
    id: '5',
    name: 'Floral Bloom Eau de Parfum',
    description: 'Elegant floral fragrance with notes of jasmine, peony, and vanilla. A sophisticated scent that lasts all day.',
    price: 89.00,
    category: 'Fragrance',
    brand: 'Essence Luxe',
    rating: 4.9,
    reviews: 743,
    images: [
      'https://images.pexels.com/photos/3738673/pexels-photo-3738673.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3738674/pexels-photo-3738674.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    inStock: true,
    trending: true,
    tags: ['perfume', 'floral', 'luxury']
  },
  {
    id: '6',
    name: 'Retinol Night Cream',
    description: 'Anti-aging night cream with retinol and peptides. Reduces fine lines and improves skin texture while you sleep.',
    price: 56.00,
    category: 'Skin Care',
    brand: 'DermaScience',
    rating: 4.8,
    reviews: 1893,
    images: [
      'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3762881/pexels-photo-3762881.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    inStock: true,
    featured: true,
    tags: ['anti-aging', 'retinol', 'night-cream']
  },
  {
    id: '7',
    name: 'Volumizing Mascara',
    description: 'Buildable mascara that adds dramatic volume and length without clumping. Smudge-proof and lasts up to 24 hours.',
    price: 28.00,
    category: 'Makeup',
    brand: 'LashPro',
    rating: 4.6,
    reviews: 2341,
    images: [
      'https://images.pexels.com/photos/2533269/pexels-photo-2533269.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2533275/pexels-photo-2533275.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    inStock: true,
    trending: true,
    tags: ['mascara', 'volumizing', 'long-lasting']
  },
  {
    id: '8',
    name: 'Collagen Boosting Face Cream',
    description: 'Rich moisturizer with marine collagen and niacinamide. Firms and plumps skin for a youthful glow.',
    price: 64.00,
    originalPrice: 82.00,
    category: 'Skin Care',
    brand: 'AgeDefense',
    rating: 4.7,
    reviews: 1567,
    images: [
      'https://images.pexels.com/photos/3685531/pexels-photo-3685531.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3685532/pexels-photo-3685532.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    inStock: true,
    tags: ['collagen', 'firming', 'moisturizer']
  },
  {
    id: '9',
    name: 'Argan Oil Hair Serum',
    description: 'Lightweight serum with pure Moroccan argan oil. Tames frizz and adds incredible shine without weighing hair down.',
    price: 32.00,
    category: 'Hair Care',
    brand: 'Moroccan Gold',
    rating: 4.8,
    reviews: 1923,
    images: [
      'https://images.pexels.com/photos/4041389/pexels-photo-4041389.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    inStock: true,
    featured: true,
    tags: ['hair-serum', 'argan-oil', 'anti-frizz']
  },
  {
    id: '10',
    name: 'Mineral Foundation SPF 30',
    description: 'Natural coverage foundation with SPF 30. Lightweight formula that evens skin tone and protects from sun damage.',
    price: 42.00,
    category: 'Makeup',
    brand: 'NaturalGlow',
    rating: 4.5,
    reviews: 1234,
    images: [
      'https://images.pexels.com/photos/3685534/pexels-photo-3685534.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3685536/pexels-photo-3685536.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    inStock: true,
    tags: ['foundation', 'spf', 'mineral']
  },
  {
    id: '11',
    name: 'Citrus Energy Body Scrub',
    description: 'Exfoliating sugar scrub with orange and grapefruit oils. Buffs away dead skin for soft, glowing body skin.',
    price: 29.00,
    category: 'Wellness',
    brand: 'SpaEssence',
    rating: 4.7,
    reviews: 876,
    images: [
      'https://images.pexels.com/photos/4041386/pexels-photo-4041386.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4041388/pexels-photo-4041388.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    inStock: true,
    tags: ['body-scrub', 'exfoliating', 'citrus']
  },
  {
    id: '12',
    name: 'Ocean Breeze Eau de Toilette',
    description: 'Fresh aquatic fragrance with marine notes and white musk. Light and refreshing for everyday wear.',
    price: 54.00,
    category: 'Fragrance',
    brand: 'AquaSense',
    rating: 4.4,
    reviews: 543,
    images: [
      'https://images.pexels.com/photos/3738675/pexels-photo-3738675.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3738676/pexels-photo-3738676.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    inStock: true,
    tags: ['perfume', 'fresh', 'aquatic']
  }
];

export const categories = [
  'All',
  'Skin Care',
  'Hair Care',
  'Makeup',
  'Fragrance',
  'Wellness'
];

export const brands = [
  'All',
  'GlowLux',
  'Pure Botanics',
  'Silk & Shine',
  'ColorStudio',
  'Essence Luxe',
  'DermaScience',
  'LashPro',
  'AgeDefense',
  'Moroccan Gold',
  'NaturalGlow',
  'SpaEssence',
  'AquaSense'
];
