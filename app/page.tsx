import { List } from '@/components';
import type { Order, OrderStatus } from '@/types/order';
import { getOrders } from '@/services/orderService';

interface GetOrdersParams {
  searchParams: {
    status?: OrderStatus;
  };
}

const OrdersPage = async ({ searchParams }: GetOrdersParams) => {
  const { status } = await searchParams;

  const orders: Order[] = await getOrders({ status });

  return (
    <>
      <List orders={orders} />
    </>
  );
};

export default OrdersPage;
