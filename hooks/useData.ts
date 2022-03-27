import { useContext } from 'react';
import { UserDataContext } from '../Provider';

export function useData() {
  return useContext(UserDataContext);
}