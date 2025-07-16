export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  images?: string[];
  availability: 'in-stock' | 'out-of-stock' | 'limited';
  specifications?: {
    dimensions?: string;
    weight?: string;
    thickness?: string;
    finish?: string;
    origin?: string;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Customer {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
}

export interface Order {
  id: string;
  customer: Customer;
  items: CartItem[];
  total: number;
  status: 'pending' | 'paid' | 'processing' | 'completed' | 'cancelled';
  paymentProof?: string;
  orderDate: Date;
  deliveryDate?: Date;
  notes?: string;
}

export interface Inquiry {
  id: string;
  customerName: string;
  email: string;
  phone?: string;
  message: string;
  productId?: string;
  productName?: string;
  date: Date;
  status: 'new' | 'responded' | 'resolved';
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'customer';
  name: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
}