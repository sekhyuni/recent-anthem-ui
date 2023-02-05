import tw, { TwStyle } from 'twin.macro';

import { MouseEventHandler } from 'react';
import Link from 'next/link';

export interface ITabsNavigationProps {
  /** active item id */
  currentItemId: number;
  /** set active item id */
  setCurrentItemId: (currentItemId: number) => void;
  /** item information */
  listOfItem: { id: number; name: string; path: string }[];
  /** navigation size */
  size?: 'normal' | 'small';
  /** base path (It should start with '/') */
  basePath?: string;
  /** click handler */
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  /** add TwStyle to component root */
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
                    currentItemId === item.id && tw`text-sky-200`,
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

export default TabsNavigation;
