export type OrderStatus =
  | 'Delivered'
  | 'Sent'
  | 'Processing'
  | 'Pending'
  | 'Cancel';
export type OrderStatusVariant =
  | 'delivered'
  | 'sent'
  | 'processing'
  | 'pending'
  | 'cancel';

export interface Order {
  id: string;
  idUser: string;
  deliveryDate: string;
  itens: string;
  price: string;
  status: OrderStatus;
  statusVariant: OrderStatusVariant;
  origin: string;
  destination: string;
  code: string;
}
