import { Order, OrderStatus } from '@/types/order';

interface GetOrdersParams {
  status?: OrderStatus;
}

export const getOrders = async ({ status }: GetOrdersParams = {}): Promise<
  Order[]
> => {
  const params = new URLSearchParams();

  if (status) {
    params.append('status', status);
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/listOrder?${params.toString()}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch orders');
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
};
