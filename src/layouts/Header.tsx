import tw from 'twin.macro';

import { useState } from 'react';
import Link from 'next/link';

import TabsNavigation from '~components/TabsNavigation/TabsNavigation';

export interface IHeader extends React.ComponentProps<'header'> {}

const Header = () => {
  const [currentItemId, setCurrentItemId] = useState<number>(0);

  return (
    <header css={[tw`relative flex flex-row items-center bg-[#0a0a0a]`]}>
      <Link
        css={[tw`w-[150px] text-center text-lg text-white cursor-pointer`]}
        href={'/'}
      >
        RSound Logo
      </Link>
      <TabsNavigation
        currentItemId={currentItemId}
        setCurrentItemId={setCurrentItemId}
        listOfItem={[
          { id: 0, name: '축가', path: 'anthem' },
          { id: 1, name: '친구랑 노래방', path: 'friend' },
          { id: 2, name: '연인과 노래방', path: 'lover' },
        ]}
        twCSS={tw`flex-1 justify-center`}
      />
      <Link
        css={[
          tw`absolute right-0 w-[100px] text-center text-white cursor-pointer`,
        ]}
        href={'/join'}
      >
        Sign In
      </Link>
    </header>
  );
};

export default Header;
