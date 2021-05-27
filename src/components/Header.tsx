import React from 'react';
import Link from 'next/link';
import Login from './Login';

type Props = { isActive: boolean; toggle: () => void; isLoggedIn: boolean };

const Header: React.VFC<Props> = ({ isActive, toggle, isLoggedIn }) => (
  <header className="flex items-center justify-between pb-4 pt-8 px-16 text-gray-600 border-b-2">
    <Link href="/">
      <a className="px-3 hover:text-indigo-500 font-sans text-4xl hover:bg-gray-200 rounded-3xl transform duration-300">
        hello
      </a>
    </Link>
    <div className="md:text-md hidden pt-6 w-64 text-xl space-x-5 md:flex md:justify-between">
      <Link href="/about">
        <a className="container mx-auto px-3 hover:text-blue-600 font-light hover:bg-gray-200 rounded-xl transform duration-300">
          ABOUT
        </a>
      </Link>

      <Link href="/game">
        <a className="container mx-auto px-3 hover:text-blue-600 font-light hover:bg-gray-200 rounded-xl transform duration-300">
          GAME
        </a>
      </Link>
      <Link href="/async">
        <a className="container mx-auto px-3 hover:text-blue-600 font-light hover:bg-gray-200 rounded-xl transform duration-300">
          ASYNC
        </a>
      </Link>
    </div>
    <Login />
    <div className="hidden mt-6 px-3 font-light hover:bg-gray-100 rounded-full transform duration-300 md:block md:bg-green-200">
      {isLoggedIn ? <p>SIGN OUT</p> : <p>LOGIN</p>}
    </div>

    <div className="pt-4 px-4 cursor-pointer md:hidden">
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        className="block px-4 cursor-pointer md:hidden"
        onClick={toggle}
        role="button"
        tabIndex={0}
      >
        <svg
          className="w-8 h-8 hover:text-pink-600 focus:outline-none fill-current transform duration-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      <div
        className={`absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 ${
          isActive ? '' : 'hidden'
        }`}
      >
        <div className="px-2 py-2 bg-white rounded-md shadow">
          <Link href="/about">
            <a className="focus:shadow-outline block mt-2 px-4 py-2 hover:text-gray-900 focus:text-gray-900 text-sm font-semibold hover:bg-gray-200 focus:bg-gray-200 bg-transparent rounded-lg focus:outline-none md:mt-0">
              ABOUT
            </a>
          </Link>
          <Link href="/game">
            <a className="focus:shadow-outline block mt-2 px-4 py-2 hover:text-gray-900 focus:text-gray-900 text-sm font-semibold hover:bg-gray-200 focus:bg-gray-200 bg-transparent rounded-lg focus:outline-none md:mt-0">
              GAME
            </a>
          </Link>
          <Link href="/async">
            <a className="focus:shadow-outline block mt-2 px-4 py-2 hover:text-gray-900 focus:text-gray-900 text-sm font-semibold hover:bg-gray-200 focus:bg-gray-200 bg-transparent rounded-lg focus:outline-none md:mt-0">
              ASYNC
            </a>
          </Link>
          <Link href="/login">
            <a className="focus:shadow-outline block mt-2 px-4 py-2 hover:text-gray-900 focus:text-gray-900 text-sm font-semibold hover:bg-gray-200 focus:bg-gray-200 bg-transparent rounded-lg focus:outline-none md:mt-0">
              LOGIN
            </a>
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
