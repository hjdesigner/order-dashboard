import Link from 'next/link';
import IconUrl from '@/icons/location.svg?url';
import Image from 'next/image';
import styles from './styles.module.css';

const Hero = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contain}>
        <Link href="/" className={styles.logo}>
          <Image
            src={IconUrl}
            alt="Dashboard logo"
            width={24}
            height={24}
            priority
          />
          Order Dashboard
        </Link>
      </div>
    </header>
  );
};

export default Hero;
