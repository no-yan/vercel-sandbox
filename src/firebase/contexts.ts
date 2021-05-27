import firebase from 'firebase/app';
import { createContext } from 'react';

type FirebaseContext = {
  auth: firebase.auth.Auth | null;
};

type UserContext = {
  user: firebase.User | null;
  setUser: (user: firebase.User) => void;
};

export const FirebaseContext = createContext<FirebaseContext>({
  auth: null,
});

export const UserContext = createContext<UserContext>({
  user: null,
  setUser: () => undefined,
});
