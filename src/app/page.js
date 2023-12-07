import Head from 'next/head'

import Nav from '@/components/nav/nav';
import Home from './home/page';

export default function App() {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Nav/>
      <Home/>
    </>
  );
}
