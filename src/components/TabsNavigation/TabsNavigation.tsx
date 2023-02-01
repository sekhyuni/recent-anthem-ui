import tw, { TwStyle } from 'twin.macro';

import React, { MouseEventHandler } from 'react';
import Link from 'next/link';

export interface ITabsNavigationProps {
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
  /** Click Handler */
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  /** Add TwStyle to Component Root */
  twCSS?: TwStyle;
}

const TabsNavigation = ({
  currentItemId,
  setCurrentItemId,
  listOfItem,
  size = 'normal',
  basePath = '',
  onClick,
  twCSS,
  ...rest
}: ITabsNavigationProps): JSX.Element => {
  return (
    <ul
      css={[
        tw`flex flex-row items-center bg-black`,
        size === 'normal' ? tw`h-[60px]` : tw`h-[42px]`,
        twCSS,
      ]}
      {...rest}
    >
      {listOfItem.map(
        (item): JSX.Element => (
          <li
            css={[tw`cursor-pointer`]}
            key={item.id}
            onClick={() => {
              setCurrentItemId(item.id);
            }}
          >
            <Link href={`${basePath}/${item.path}`} passHref legacyBehavior>
              <a css={[tw`px-[30px]`]} onClick={onClick}>
                <span
                  css={[
                    tw`text-white`,
                    currentItemId === item.id && tw`text-[#98FB98]`,
                    size === 'normal'
                      ? tw`text-[18px] leading-[32px]`
                      : tw`text-[16px] leading-[26px]`,
                  ]}
                  aria-selected={currentItemId === item.id}
                >
                  {item.name}
                </span>
              </a>
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default React.memo(TabsNavigation);
