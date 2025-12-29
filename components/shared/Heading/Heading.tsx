import type { ReactNode, ElementType } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  as?: HeadingLevel;
  children: ReactNode;
  className?: string;
}

const Heading = ({ as = 'h2', children, className }: HeadingProps) => {
  const Component = as as ElementType;

  return (
    <Component className={clsx(styles.heading, styles[as], className)}>
      {children}
    </Component>
  );
};

export default Heading;
