import { Order } from '@/types/order';

export const getOrders = async (): Promise<Order[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/listOrder`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error('Failed to fetch orders');
    return res.json();
  } catch (error) {
    console.error('Error fetching orders:', error);
    return []; // fallback vazio
  }
};
