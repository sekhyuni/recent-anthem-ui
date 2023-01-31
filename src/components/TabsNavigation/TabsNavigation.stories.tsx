import tw from 'twin.macro';

import { useState } from 'react';

import TabsNavigation, { ITabsNavigationProps } from './TabsNavigation';

export default {
  title: 'Components/TabsNavigation',
  component: TabsNavigation,
};

export const Normal = ({
  listOfItem = [
    { id: 0, name: '축가', path: 'anthem' },
    { id: 1, name: '친구랑 노래방', path: 'friend' },
    { id: 2, name: '연인과 노래방', path: 'lover' },
  ],
  size = 'normal',
}: ITabsNavigationProps) => {
  const [currentItemId, setCurrentItemId] = useState<number>(0);

  return (
    <TabsNavigation
      currentItemId={currentItemId}
      setCurrentItemId={setCurrentItemId}
      listOfItem={listOfItem}
      size={size}
    />
  );
};

export const Small = ({
  listOfItem = [
    { id: 0, name: '전체', path: '/' },
    { id: 1, name: '내 글', path: '/private' },
  ],
  size = 'small',
  twCSS = tw`h-[46px]`,
}: ITabsNavigationProps) => {
  const [currentItemId, setCurrentItemId] = useState<number>(0);

  return (
    <TabsNavigation
      currentItemId={currentItemId}
      setCurrentItemId={setCurrentItemId}
      listOfItem={listOfItem}
      size={size}
      twCSS={twCSS}
    />
  );
};
