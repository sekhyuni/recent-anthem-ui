import tw from 'twin.macro';

import { ReactNode } from 'react';

import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main css={[tw`min-h-[calc(100%-160px)]`]}>
        {/* <div css={[tw`flex flex-row`]}>
          <aside css={[tw`flex flex-col items-center w-[250px]`]}>
            This is Aside Area
          </aside> */}
        {children}
        {/* </div> */}
      </main>
      <Footer />
    </>
  );
}
