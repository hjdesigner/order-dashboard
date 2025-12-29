// Card.test.tsx
import { render, screen } from '@testing-library/react';
import Card from './Card';
import { Order } from '@/types/order';
import { ImageProps } from 'next/image';

const mockOrder: Order = {
  id: '1',
  idUser: '123',
  code: 'BR123456789PT',
  status: 'Delivered',
  statusVariant: 'delivered',
  origin: 'Porto',
  destination: 'Lisbon',
  deliveryDate: '2024-12-10T00:00:00.000Z',
  itens: '3',
  price: '397.69',
};

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: ImageProps) => <img {...props} alt="" />,
}));

describe('Card component', () => {
  it('renders order code correctly', () => {
    render(<Card {...mockOrder} />);
    const codeElement = screen.getByLabelText(`Order code ${mockOrder.code}`);
    expect(codeElement).toBeInTheDocument();
    expect(codeElement).toHaveTextContent(mockOrder.code);
  });

  it('renders Status component correctly', () => {
    render(<Card {...mockOrder} />);
    const statusElement = screen.getByTestId('status');
    expect(statusElement).toBeInTheDocument();
    expect(statusElement).toHaveTextContent(`${mockOrder.status}`);
  });

  it('renders cities correctly', () => {
    render(<Card {...mockOrder} />);
    expect(screen.getByText(mockOrder.origin)).toBeInTheDocument();
    expect(screen.getByText(mockOrder.destination)).toBeInTheDocument();
  });

  it('renders order details correctly', () => {
    render(<Card {...mockOrder} />);
    const formattedDate = new Date(mockOrder.deliveryDate).toLocaleDateString(
      'en-GB'
    );

    expect(screen.getByText('Estimated delivery')).toBeInTheDocument();
    expect(screen.getByText(formattedDate)).toBeInTheDocument();

    expect(screen.getByText('Items')).toBeInTheDocument();
    expect(screen.getByText(mockOrder.itens)).toBeInTheDocument();

    expect(screen.getByText('Price')).toBeInTheDocument();
    expect(screen.getByText(/397,69.*€/)).toBeInTheDocument();
  });
});
