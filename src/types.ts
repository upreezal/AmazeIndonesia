export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'Pria' | 'Wanita';
  subDescription?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CheckoutForm {
  name: string;
  whatsapp: string;
  address: string;
  notes: string;
}
