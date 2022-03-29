import { createContext, Dispatch, useReducer } from 'react';
import { Data } from '../constants/Data';

const initialState = {
  "University": "",
  "Name": "",
  "Major": "",
  "Bio": "",
  "Grade": "",
  "Political Leaning": "",
  "I'm not interested in artistic things (music, plays, poetry, etc.)": "",
  "I always tell people the truth, even if it might hurt": "",
  "Left brain or right brain": "",
  "I laugh a lot": "",
  "I don't like drawing attention to myself": "",
  "I tend to be quiet": "",
  "I like playing with abstract ideas": "",
  "Staying physically fit is very important to me": "",
  "I frequently plan things out in advance": "",
  "Interests": ""
};

interface Action {
  type: string;
  payload: string;
}


export const UserDataContext = createContext<{
  state: Data;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});
export const { Consumer, Provider } = UserDataContext;


function reducer(state: Data, action: Action) {
  return {
    ...state,
    [action.type]: action.payload,
  };
}

type Props = {
  children: JSX.Element
}

export default function DataProvider({ children } : Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserDataContext.Provider value={{state, dispatch}}>
      {children}
    </UserDataContext.Provider>
  )
}