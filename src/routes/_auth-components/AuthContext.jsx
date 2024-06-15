import { createContext } from 'react';

export const AuthContext = createContext([
  {
    access: undefined,
    role: undefined
  },
  () => {}
]);
