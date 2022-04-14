import { createContext, Dispatch, SetStateAction, useState } from 'react';

export const OptContext = createContext<{
  opt: boolean;
  setOpt: Dispatch<SetStateAction<boolean>>
}>({
  opt: false,
  setOpt: () => null
});

export const { Consumer, Provider } = OptContext;

type Props = {
  children: JSX.Element
}

export default function OptProvider({ children } : Props) {
  const [opt, setOpt] = useState(false);
  return (
    <OptContext.Provider value={{opt, setOpt}}>
      {children}
    </OptContext.Provider>
  )
}