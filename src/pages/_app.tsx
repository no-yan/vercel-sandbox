import 'tailwindcss/tailwind.css';
import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import FirebaseApp from '../firebase/FirebaseApp';
import Header from '../components/Header';

const Footer = () => (
  <div className="h-15 px-5 py-4 text-lg bg-white border-t-2">Im god</div>
);

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [isActive, setIsActive] = React.useState(false);
  const [isLoggedIn] = React.useState(false);

  const toggle = React.useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  useEffect(() => {
    setIsActive(false);
  }, [Component]);

  return (
    <FirebaseApp>
      <div className="flex flex-col justify-between min-h-screen">
        <Header isLoggedIn={isLoggedIn} isActive={isActive} toggle={toggle} />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
        <Footer />
      </div>
    </FirebaseApp>
  );
};

export default MyApp;
