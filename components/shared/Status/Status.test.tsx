import { render, screen } from '@testing-library/react';
import Status from './Status';
import styles from './styles.module.css';

describe('Status component', () => {
  it('renders the correct text and role', () => {
    render(<Status text="Delivered" variant="delivered" />);

    const statusElement = screen.getByRole('status', { name: /Delivered/i });
    expect(statusElement).toBeInTheDocument();
    expect(statusElement).toHaveTextContent('Delivered');
  });

  it('applies the correct class for variant', () => {
    render(<Status text="Pending" variant="pending" />);

    const statusElement = screen.getByRole('status', { name: /Pending/i });
    expect(statusElement).toHaveClass(styles.status);
    expect(statusElement).toHaveClass(styles.pending);
  });

  it('renders correctly for all variants', () => {
    const variants = [
      { text: 'Delivered', variant: 'delivered' },
      { text: 'Sent', variant: 'sent' },
      { text: 'Processing', variant: 'processing' },
      { text: 'Pending', variant: 'pending' },
      { text: 'Cancel', variant: 'cancel' },
    ] as const;

    variants.forEach(({ text, variant }) => {
      render(<Status text={text} variant={variant} />);
      const statusElement = screen.getByRole('status', { name: text });
      expect(statusElement).toHaveClass(styles.status);
      expect(statusElement).toHaveClass(styles[variant]);
    });
  });
});
