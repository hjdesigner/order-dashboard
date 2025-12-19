import type { FeatureFlag } from '@/store/featureFlagSlice';

const BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE}/featureFlag`;

export const getFeatureFlags = async (): Promise<FeatureFlag[]> => {
  const res = await fetch(BASE_URL);

  if (!res.ok) {
    throw new Error('Failed to fetch feature flags');
  }

  return res.json();
};

export const putFeatureFlag = async (
  id: string,
  status: boolean
): Promise<FeatureFlag> => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status }),
  });

  if (!res.ok) {
    throw new Error('Failed to update feature flag');
  }

  return res.json();
};
