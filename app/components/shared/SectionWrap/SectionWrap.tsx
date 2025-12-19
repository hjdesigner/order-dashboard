import type { ReactNode } from 'react';
import styles from './styles.module.css';

interface SectionWrapProps {
  children: ReactNode;
}

const SectionWrap = ({ children }: SectionWrapProps) => {
  return (
    <section className={styles.sectionWrap}>
      <div className={styles.sectionContainer}>{children}</div>
    </section>
  );
};

export default SectionWrap;
