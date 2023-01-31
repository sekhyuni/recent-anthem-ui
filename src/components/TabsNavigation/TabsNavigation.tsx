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
  /** Base Path (It should start with '/') */
  basePath?: string;
  /** Add TwStyle to Component Root */
  twCSS?: TwStyle;
}

const TabsNavigation = ({
  currentItemId,
  setCurrentItemId,
  listOfItem,
  size = 'normal',
  basePath = '',
  twCSS,
  ...rest
}: ITabsNavigationProps): JSX.Element => {
  return (
    <ul
      css={[
        tw`flex flex-row items-center h-[52px] p-0 list-none bg-[#0a0a0a]`,
        twCSS,
      ]}
      {...rest}
    >
      {listOfItem.map(
        (item): JSX.Element => (
          <li
            css={[
              tw`cursor-pointer`,
              currentItemId === item.id &&
                tw`border-b-[3px] border-solid border-blue-800`,
            ]}
            key={item.id}
            onClick={() => {
              setCurrentItemId(item.id);
            }}
          >
            <Link
              href={`${basePath}/${item.path}`}
              onClick={(e) => e.preventDefault()}
            >
              <a css={[tw`px-[30px]`]}>
                <S.SpanOfNavigationName
                  size={size}
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
