import tw from 'twin.macro';

import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main css={[tw`min-h-[calc(100%-160px)]`]}>{children}</main>
      <Footer />
    </>
  );
}
