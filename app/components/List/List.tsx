import { Card } from '@/components';
import type { Order } from '@/types/order';
import styles from './styles.module.css';

interface ListProps {
  orders: Order[];
}

const List = ({ orders }: ListProps) => {
  return (
    <section className={styles.listContainer}>
      <div className={styles.listWrapper}>
        <h1 className={styles.listTitle}>My Orders</h1>
        <ul className={styles.listItems} role="list">
          {orders.length ? (
            orders.map((order) => <Card key={order.id} {...order} />)
          ) : (
            <p>No orders found</p>
          )}
        </ul>
      </div>
    </section>
  );
};

export default List;
