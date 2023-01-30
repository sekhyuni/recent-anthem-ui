import tw, { TwStyle } from 'twin.macro';
import * as S from './TabsNavigation.styled';

import React from 'react';
import Link from 'next/link';

export interface ITabsNavigationProps extends React.ComponentProps<'ul'> {
  /** Active Item Id */
  currentItemId: number;
  /** Set Active Item Id */
  setCurrentItemId: (currentItemId: number) => void;
  /** Item Information */
  listOfItem: { id: number; name: string; path: string }[];
  /** Navigation Size */
  size?: 'normal' | 'small';
  /** Base Path */
  basePath?: string;
  /** Add TwStyle to Component Root */
  twCSS?: TwStyle;
}

const TabsNavigation = ({
  currentItemId,
  setCurrentItemId,
  listOfItem,
  size = 'normal',
  basePath,
  twCSS,
  ...rest
}: ITabsNavigationProps): JSX.Element => {
  return (
    <ul css={[tw`h-[52px] p-0 list-none`, twCSS]} {...rest}>
      {listOfItem.map(
        (item): JSX.Element => (
          <li
            css={[
              tw`relative inline-block h-full cursor-pointer`,
              currentItemId === item.id &&
                tw`border-b-[3px] border-solid border-blue-800`,
            ]}
            key={item.id}
            onClick={() => {
              setCurrentItemId(item.id);
            }}
          >
            <Link href={`/${basePath}/${item.path}`}>
              <a css={[tw`relative inline-block h-full px-[30px]`]}>
                <S.SpanOfNavigationName
                  css={[tw`-translate-x-1/2 -translate-y-1/2`]}
                  size={size}
                  isActive={currentItemId === item.id}
                  aria-selected={currentItemId === item.id}
                >
                  {item.name}
                </S.SpanOfNavigationName>
              </a>
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default React.memo(TabsNavigation);
