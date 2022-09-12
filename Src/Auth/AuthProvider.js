import auth from '@react-native-firebase/auth';
import {createContext} from 'react';
import {Children} from 'react/cjs/react.production.min';

export const authCont = createContext();
export const AuthProvider = () => {
  return (
    <authCont.Provider>
      value={{
        user
      }}
      {children}
    </authCont.Provider>
  );
};
