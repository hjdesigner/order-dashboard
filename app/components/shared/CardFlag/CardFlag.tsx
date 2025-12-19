import { useDispatch } from 'react-redux';
import { updateFeatureFlag } from '@/store/featureFlagSlice';
import type { AppDispatch } from '../../../store';

import styles from './styles.module.css';
import clsx from 'clsx';

type FlagProps = {
  id: string;
  name: string;
  status: boolean;
};

interface CardFlagProps {
  flag: FlagProps;
}

const CardFlag = ({ flag }: CardFlagProps) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <li className={styles.cardFlag}>
      <span>{flag.name}</span>

      <button
        className={clsx(styles.flagButton, { [styles.disable]: flag.status })}
        onClick={() =>
          dispatch(
            updateFeatureFlag({
              id: flag.id,
              status: !flag.status,
            })
          )
        }
      >
        {flag.status ? 'Disable' : 'Enable'}
      </button>
    </li>
  );
};

export default CardFlag;
