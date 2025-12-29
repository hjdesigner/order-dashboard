import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const useFeatureFlag = (name: string) => {
  return useSelector(
    (state: RootState) =>
      state.featureFlags.flags.find((flag) => flag.name === name)?.status
  );
};
