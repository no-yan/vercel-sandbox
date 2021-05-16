import 'tailwindcss/tailwind.css';
import React, { useEffect } from 'react';
import Header from '../components/Header';

const Footer = () => (
  <div className="h-15 px-5 py-4 text-lg bg-white border-t-2">Im god</div>
);

type Props = {
  Component: React.FC<unknown>;
  pageProps: any;
};

const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
  const [isActive, setIsActive] = React.useState(false);
  const [isLoggedIn] = React.useState(false);

  const toggle = React.useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  useEffect(() => {
    setIsActive(false);
  }, [Component]);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className="flex flex-col justify-between min-h-screen">
      <Header isLoggedIn={isLoggedIn} isActive={isActive} toggle={toggle} />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
