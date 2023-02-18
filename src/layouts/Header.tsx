import tw from 'twin.macro';

import React, { useState } from 'react';
import Link from 'next/link';

import TabsNavigation from '~components/commons/TabsNavigation/TabsNavigation';

export interface IHeader extends React.ComponentProps<'header'> {}

const Header = (): JSX.Element => {
  const [currentItemId, setCurrentItemId] = useState<number>(0);

  return (
    <header css={[tw`relative flex flex-row items-center bg-[#0a0a0a]`]}>
      <Link
        css={[tw`w-[150px] text-center text-2xl text-white cursor-pointer`]}
        href={'/'}
      >
        알사운드
      </Link>
      <TabsNavigation
        currentItemId={currentItemId}
        setCurrentItemId={setCurrentItemId}
        listOfItem={[
          { id: 0, name: '실시간 TOP', path: 'top' },
          { id: 1, name: '축가', path: 'anthem' },
          { id: 2, name: '친구랑 노래방', path: 'friend' },
          { id: 3, name: '연인과 노래방', path: 'lover' },
        ]}
        twCSS={tw`justify-center flex-1`}
      />
      <Link
        css={[
          tw`absolute right-0 w-[100px] text-center text-white cursor-pointer`,
        ]}
        href={'/join'}
      >
        로그인
      </Link>
    </header>
  );
};

export default Header;
