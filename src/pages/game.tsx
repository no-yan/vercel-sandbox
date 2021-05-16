import Head from 'next/head';
import React from 'react';
import Game from '../game/components/Game';
import Explainer from '../game/components/Explainer';

const GAME = (): JSX.Element => (
  <div className="flex-1 bg-gray-300 xl:mx-48 xl:my-10 xl:py-28 xl:rounded-2xl">
    <Head>
      <meta charSet="utf-8" />
      <title>GAME</title>
    </Head>
    <main className="flex flex-row justify-center mx-auto pl-32 w-full space-x-12 md:w-9/12">
      <div style={{ minWidth: '320px' }}>
        <Game />
      </div>
      <div className="flex-1">
        <Explainer />
      </div>
    </main>
  </div>
);

export default GAME;
