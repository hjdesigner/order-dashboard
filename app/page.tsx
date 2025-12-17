import { List } from '@/components';
import type { Order } from '@/types/order';
import { getOrders } from '@/services/orderService';

const OrdersPage = async () => {
  const orders: Order[] = await getOrders();

  return (
    <>
      <List orders={orders} />
    </>
  );
};

export default OrdersPage;
