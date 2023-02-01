import tw from 'twin.macro';

import { useState } from 'react';

import TabsNavigation from '~components/TabsNavigation/TabsNavigation';

export interface IHeader extends React.ComponentProps<'header'> {}

const Header = () => {
  const [currentItemId, setCurrentItemId] = useState<number>(0);

  return (
    <header>
      <TabsNavigation
        currentItemId={currentItemId}
        setCurrentItemId={setCurrentItemId}
        listOfItem={[
          { id: 0, name: '축가', path: 'anthem' },
          { id: 1, name: '친구랑 노래방', path: 'friend' },
          { id: 2, name: '연인과 노래방', path: 'lover' },
        ]}
        twCSS={tw`h-[60px]`}
      />
    </header>
  );
};

export default Header;
