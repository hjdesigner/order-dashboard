import { screen, fireEvent } from '@testing-library/react';
import Filter from './Filter';
import { renderWithProviders } from '../../../utils/test-utils';
import type { OrderStatus } from '@/types/order';

const mockPush = jest.fn();
const mockGet = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
  useSearchParams: () => ({
    get: mockGet,
    toString: () => '',
  }),
}));

describe('Filter component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all options', () => {
    mockGet.mockReturnValue('');
    renderWithProviders(<Filter />, {
      preloadedState: {
        featureFlags: {
          flags: [{ id: '1', name: 'hasFilter', status: true }],
          loading: false,
        },
      },
    });
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(6);
    expect(screen.getByText('All Status')).toBeInTheDocument();
    (
      ['Delivered', 'Sent', 'Processing', 'Pending', 'Cancel'] as OrderStatus[]
    ).forEach((status) => {
      expect(screen.getByText(status)).toBeInTheDocument();
    });
  });

  it('sets currentStatus from searchParams', () => {
    mockGet.mockReturnValue('Sent');
    renderWithProviders(<Filter />, {
      preloadedState: {
        featureFlags: {
          flags: [{ id: '1', name: 'hasFilter', status: true }],
          loading: false,
        },
      },
    });
    const select = screen.getByRole('combobox') as HTMLSelectElement;
    expect(select.value).toBe('Sent');
  });

  it('calls router.push with the correct params when selecting a status', () => {
    mockGet.mockReturnValue('');
    renderWithProviders(<Filter />, {
      preloadedState: {
        featureFlags: {
          flags: [{ id: '1', name: 'hasFilter', status: true }],
          loading: false,
        },
      },
    });
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'Delivered' } });
    expect(mockPush).toHaveBeenCalledWith('?status=Delivered');
  });

  it('removes status from params when selecting "All Status"', () => {
    mockGet.mockReturnValue('Sent');
    renderWithProviders(<Filter />, {
      preloadedState: {
        featureFlags: {
          flags: [{ id: '1', name: 'hasFilter', status: true }],
          loading: false,
        },
      },
    });
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: '' } });
    expect(mockPush).toHaveBeenCalledWith('?');
  });
});
