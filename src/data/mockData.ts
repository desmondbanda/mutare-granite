import { Product } from '../types';

export const categories = [
  {
    id: '1',
    name: 'Countertops',
    description: 'Premium granite countertops for kitchens and bathrooms',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    name: 'Tiles',
    description: 'Durable granite tiles for floors and walls',
    image: 'https://images.pexels.com/photos/6782342/pexels-photo-6782342.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    name: 'Tombstones',
    description: 'Elegant granite tombstones and monuments',
    image: 'https://images.pexels.com/photos/8369769/pexels-photo-8369769.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    name: 'Slabs',
    description: 'Raw granite slabs for custom projects',
    image: 'https://images.pexels.com/photos/6782344/pexels-photo-6782344.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Black Galaxy Countertop',
    category: 'Countertops',
    price: 4500,
    description: 'Premium black granite countertop with sparkling gold flecks. Perfect for modern kitchens.',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
    availability: 'in-stock',
    specifications: {
      dimensions: '120cm x 60cm',
      thickness: '3cm',
      finish: 'Polished',
      origin: 'India'
    }
  },
  {
    id: '2',
    name: 'White Ice Countertop',
    category: 'Countertops',
    price: 3800,
    description: 'Elegant white granite with subtle gray veining. Ideal for contemporary designs.',
    image: 'https://images.pexels.com/photos/6782341/pexels-photo-6782341.jpeg?auto=compress&cs=tinysrgb&w=800',
    availability: 'in-stock',
    specifications: {
      dimensions: '120cm x 60cm',
      thickness: '3cm',
      finish: 'Polished',
      origin: 'Brazil'
    }
  },
  {
    id: '3',
    name: 'Imperial Red Tiles',
    category: 'Tiles',
    price: 180,
    description: 'Rich red granite tiles with natural patterns. Perfect for accent walls.',
    image: 'https://images.pexels.com/photos/6782342/pexels-photo-6782342.jpeg?auto=compress&cs=tinysrgb&w=800',
    availability: 'limited',
    specifications: {
      dimensions: '30cm x 30cm',
      thickness: '1cm',
      finish: 'Honed',
      origin: 'India'
    }
  },
  {
    id: '4',
    name: 'Granite Floor Tiles',
    category: 'Tiles',
    price: 150,
    description: 'Durable granite floor tiles with anti-slip finish. Perfect for high-traffic areas.',
    image: 'https://images.pexels.com/photos/6782344/pexels-photo-6782344.jpeg?auto=compress&cs=tinysrgb&w=800',
    availability: 'in-stock',
    specifications: {
      dimensions: '60cm x 60cm',
      thickness: '2cm',
      finish: 'Flamed',
      origin: 'China'
    }
  },
  {
    id: '5',
    name: 'Classic Memorial Stone',
    category: 'Tombstones',
    price: 12000,
    description: 'Traditional granite tombstone with custom engraving options.',
    image: 'https://images.pexels.com/photos/8369769/pexels-photo-8369769.jpeg?auto=compress&cs=tinysrgb&w=800',
    availability: 'in-stock',
    specifications: {
      dimensions: '100cm x 50cm',
      thickness: '8cm',
      finish: 'Polished',
      origin: 'South Africa'
    }
  },
  {
    id: '6',
    name: 'Raw Granite Slab',
    category: 'Slabs',
    price: 8500,
    description: 'Premium raw granite slab for custom fabrication projects.',
    image: 'https://images.pexels.com/photos/6782347/pexels-photo-6782347.jpeg?auto=compress&cs=tinysrgb&w=800',
    availability: 'in-stock',
    specifications: {
      dimensions: '300cm x 200cm',
      thickness: '3cm',
      finish: 'Raw',
      origin: 'Zimbabwe'
    }
  }
];

export const mockOrders = [
  {
    id: '1',
    customer: {
      name: 'John Smith',
      email: 'john@email.com',
      phone: '+263 77 123 4567',
      address: '123 Main St',
      city: 'Harare'
    },
    items: [
      { product: products[0], quantity: 1 },
      { product: products[2], quantity: 5 }
    ],
    total: 5400,
    status: 'pending' as const,
    orderDate: new Date('2024-01-15')
  }
];

export const mockInquiries = [
  {
    id: '1',
    customerName: 'Mary Johnson',
    email: 'mary@email.com',
    phone: '+263 77 987 6543',
    message: 'I need a quote for kitchen countertops',
    productId: '1',
    productName: 'Black Galaxy Countertop',
    date: new Date('2024-01-16'),
    status: 'new' as const
  }
];