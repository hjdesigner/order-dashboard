import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFeatureFlags, putFeatureFlag } from '@/services/featureFlag';

export interface FeatureFlag {
  id: string;
  name: string;
  status: boolean;
}

interface FeatureFlagsState {
  flags: FeatureFlag[];
  loading: boolean;
  error: string | null;
}

const initialState: FeatureFlagsState = {
  flags: [],
  loading: true,
  error: null,
};

export const fetchFeatureFlags = createAsyncThunk(
  'featureFlags/fetch',
  async () => {
    return getFeatureFlags();
  }
);

export const updateFeatureFlag = createAsyncThunk(
  'featureFlags/update',
  async ({ id, status }: { id: string; status: boolean }) => {
    return putFeatureFlag(id, status);
  }
);

const featureFlagsSlice = createSlice({
  name: 'featureFlags',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeatureFlags.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFeatureFlags.fulfilled, (state, action) => {
        state.flags = action.payload;
        state.loading = false;
      })
      .addCase(fetchFeatureFlags.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to load feature flags';
      })
      .addCase(updateFeatureFlag.fulfilled, (state, action) => {
        const index = state.flags.findIndex(
          (flag) => flag.id === action.payload.id
        );

        if (index !== -1) {
          state.flags[index] = action.payload;
        }
      })
      .addCase(updateFeatureFlag.rejected, (state) => {
        state.error = 'Failed to update feature flag';
      });
  },
});

export default featureFlagsSlice.reducer;
