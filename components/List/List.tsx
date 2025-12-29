import { Card, Filter, Heading, SectionWrap } from '@/components';
import type { Order } from '@/types/order';
import styles from './styles.module.css';

interface ListProps {
  orders: Order[];
}

const List = ({ orders }: ListProps) => {
  return (
    <SectionWrap>
      <header className={styles.listHeader}>
        <Heading as="h1">My Orders</Heading>
        <Filter />
      </header>
      <ul className={styles.listItems} role="list" data-testid="order-list">
        {orders.length ? (
          orders.map((order) => <Card key={order.id} {...order} />)
        ) : (
          <p>No orders found</p>
        )}
      </ul>
    </SectionWrap>
  );
};

export default List;
