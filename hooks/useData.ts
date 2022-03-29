import { useContext } from 'react';
import { UserDataContext } from '../providers/DataProvider';

export function useData() {
  return useContext(UserDataContext);
}