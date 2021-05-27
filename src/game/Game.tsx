import Head from 'next/head';
import React from 'react';
import Reversi from 'game/components/Reversi';
import Explainer from 'game/components/Explainer';
import ImpressionAfterMaking from 'game/components/ImpressionAfterMaking';

const Game = (): JSX.Element => (
  <div className="">
    <Head>
      <meta charSet="utf-8" />
      <title>GAME</title>
    </Head>
    <main>
      <section className="bg-gray-300 xl:mx-48 xl:my-10 xl:py-28 xl:w-9/12 xl:rounded-2xl">
        <div className="mx-auto w-full space-x-4 md:flex md:pl-80 md:pr-48">
          <div style={{ minWidth: '320px' }}>
            <Reversi />
          </div>
          <div className="">
            <Explainer />
          </div>
        </div>
        <div className="mt-8 mx-auto pt-8 border-t-2 border-dashed border-white space-x-4 md:flex md:px-60">
          <ImpressionAfterMaking />
        </div>
      </section>

      <section className="mx-auto pt-32 w-full bg-gray-300 space-x-12 md:w-9/12 xl:mx-48 xl:my-10 xl:py-28 xl:rounded-2xl" />
    </main>
  </div>
);

export default Game;
