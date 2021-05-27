import React, { FC, useEffect, useState } from 'react';
import fb from 'firebase/app';
import { auth } from './Firebase';
import 'firebase/auth';
import 'firebase/firestore';

import { FirebaseContext, UserContext } from './contexts';

const FirebaseApp: FC = ({ children }) => {
  const [user, setUser] = useState<fb.User | null>(null);

  const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      setUser(firebaseUser);
    } else {
      setUser(null);
    }
  });

  useEffect(() => unsubscribe);

  return (
    <FirebaseContext.Provider value={{ auth }}>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </FirebaseContext.Provider>
  );
};

export default FirebaseApp;
