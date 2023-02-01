import tw from 'twin.macro';

import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main css={[tw`flex flex-col min-h-[calc(100%-160px)]`]}>
        <div css={[tw`flex flex-row justify-center items-center h-[60px]`]}>
          This is Search Bar Area
        </div>
        <div css={[tw`flex flex-row`]}>
          <aside css={[tw`flex flex-col items-center w-[250px]`]}>
            This is Aside Area
          </aside>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
