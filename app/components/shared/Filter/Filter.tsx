'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import type { OrderStatus } from '@/types/order';

import styles from './styles.module.css';

const OPTIONS: OrderStatus[] = [
  'Delivered',
  'Sent',
  'Processing',
  'Pending',
  'Cancel',
];

const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentStatus = searchParams.get('status') ?? '';

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set('status', value);
    } else {
      params.delete('status');
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <label className={styles.filter}>
      <select
        className={styles.filterSelect}
        value={currentStatus}
        onChange={handleChange}
      >
        <option value="">All Status</option>
        {OPTIONS.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Filter;
