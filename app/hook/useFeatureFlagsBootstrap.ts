'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFeatureFlags } from '../store/featureFlagSlice';
import type { AppDispatch } from '../store';

export function FeatureFlagsBootstrap() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchFeatureFlags());
  }, [dispatch]);

  return null;
}
