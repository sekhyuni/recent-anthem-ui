import tw from 'twin.macro';

import { useState } from 'react';

import TabsNavigation, { ITabsNavigationProps } from './TabsNavigation';

export default {
  title: 'Components/TabsNavigation',
  component: TabsNavigation,
};

export const Normal = ({
  listOfItem = [
    { id: 0, name: '개요', path: 'overview' },
    { id: 1, name: '데이터', path: 'data' },
    { id: 2, name: '코드', path: 'codeshare' },
    { id: 3, name: '포럼 및 댓글', path: 'talkboard' },
    { id: 4, name: '리더보드', path: 'leaderboard' },
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
