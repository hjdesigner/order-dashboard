// utils/test-utils.tsx
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import featureFlagsReducer from '../store/featureFlagSlice';

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        featureFlags: featureFlagsReducer,
      },
      preloadedState,
    }),
  } = {}
) {
  return render(<Provider store={store}>{ui}</Provider>);
}
