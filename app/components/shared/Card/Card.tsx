import Image from 'next/image';
import IconUrl from '@/icons/arrowRight.svg?url';
import { Status } from '@/components';
import { formatPrice } from '@/app/utils/format';
import type { Order } from '@/types/order';
import styles from './styles.module.css';

const Card = ({
  code,
  status,
  statusVariant,
  origin,
  destination,
  deliveryDate,
  itens,
  price,
}: Order) => {
  const formattedDate = new Date(deliveryDate).toLocaleDateString('en-GB');

  return (
    <li className={styles.card} role="listitem">
      <header className={styles.cardLeft}>
        <div className={styles.cardCodeStatus}>
          <span className={styles.cardCode} aria-label={`Order code ${code}`}>
            {code}
          </span>
          <Status text={status} variant={statusVariant} />
        </div>
        <section
          className={styles.cities}
          aria-label={`From ${origin} to ${destination}`}
        >
          <p className={styles.cityText}>{origin}</p>
          <Image src={IconUrl} alt="" width={24} height={24} />
          <p className={styles.cityText}>{destination}</p>
        </section>
      </header>
      <section className={styles.cardRight} aria-label="Order details">
        <div className={styles.cardInfo}>
          <p className={styles.cardInfoTitle}>Estimated delivery</p>
          <p className={styles.cardInfoText}>{formattedDate}</p>
        </div>
        <div className={styles.cardInfo}>
          <p className={styles.cardInfoTitle}>Items</p>
          <p className={styles.cardInfoText}>{itens}</p>
        </div>
        <div className={styles.cardInfo}>
          <p className={styles.cardInfoTitle}>Price</p>
          <p className={styles.cardInfoText}>{formatPrice(price)}</p>
        </div>
      </section>
    </li>
  );
};

export default Card;
