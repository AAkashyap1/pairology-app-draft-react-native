import { useContext } from 'react';
import { OptContext } from '../providers/OptProvider';

export function useOpt() {
  return useContext(OptContext);
}