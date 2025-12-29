import clsx from 'clsx';
import type { OrderStatus, OrderStatusVariant } from '@/types/order';
import styles from './styles.module.css';

interface StatusProps {
  text: OrderStatus;
  variant: OrderStatusVariant;
}

const STATUS_CLASSES: Record<StatusProps['variant'], string> = {
  delivered: styles.delivered,
  sent: styles.sent,
  processing: styles.processing,
  pending: styles.pending,
  cancel: styles.cancel,
};

const Status = ({ text, variant }: StatusProps) => {
  return (
    <span
      className={clsx(styles.status, STATUS_CLASSES[variant])}
      role="status"
      aria-label={text}
      data-testid="status"
    >
      {text}
    </span>
  );
};

export default Status;
