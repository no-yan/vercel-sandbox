import Head from 'next/head';
import React from 'react';

const About = (): JSX.Element => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>HOME</title>
    </Head>
    {/* 自分がなぜプログラマーを志したのか 興味関心 status */}
    <main className="mx-auto pt-32 w-10/12">
      <section className="pt-24">
        <h2 className="pl-8 pt-12 text-4xl">noyanについて</h2>
        <p className="pt-2">Im hoge</p>
      </section>

      <section>
        <div>
          <h2 className="py-4 text-5xl tracking-wider">関心</h2>
          <p className="w-1/2 text-xl">
            Reactのレンダリング戦略に関心を持っています
          </p>
        </div>
      </section>
      <section className="">
        <div>
          <h2 className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </h2>
          <p className="w-1/2">
            &quot;Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?&quot;
          </p>
        </div>
      </section>
      <section className="pt-10">
        <div>
          <h2 className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </h2>
          <p className="w-1/2">
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
    </main>
  </>
);

export default About;
