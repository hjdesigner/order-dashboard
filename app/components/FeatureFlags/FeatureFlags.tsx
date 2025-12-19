'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardFlag, Heading, SectionWrap } from '@/components';
import { fetchFeatureFlags } from '@/store/featureFlagSlice';
import type { RootState, AppDispatch } from '../../store';

import styles from './styles.module.css';

const FeatureFlags = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { flags, loading, error } = useSelector(
    (state: RootState) => state.featureFlags
  );

  useEffect(() => {
    dispatch(fetchFeatureFlags());
  }, [dispatch]);

  return (
    <SectionWrap>
      <header>
        <Heading as="h1">Manage Feature Flags</Heading>
      </header>

      {loading && <p>Loading feature flags...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && flags.length === 0 && (
        <p>No feature flags found</p>
      )}

      {!loading && !error && flags.length > 0 && (
        <ul className={styles.flagItems}>
          {flags.map((flag) => (
            <CardFlag key={flag.id} flag={flag} />
          ))}
        </ul>
      )}
    </SectionWrap>
  );
};

export default FeatureFlags;
