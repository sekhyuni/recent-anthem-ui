import tw, { TwStyle } from 'twin.macro';

import React, { forwardRef } from 'react';

import { ReactComponent as SearchIcon } from '~assets/svg/icon-search.svg';

export interface ISearchBarProps extends React.ComponentProps<'input'> {
  /** input element의 onChange 이벤트에 할당되는 function입니다.  */
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Add TwStyle to Component Root */
  twCSS?: TwStyle;
  /** filter 옵션과 같은 layer를 추가할 경우에 children요소로 넣어주세요. */
  children?: React.ReactNode;
}

const SearchBar = forwardRef<HTMLInputElement, ISearchBarProps>(
  (
    { twCSS, id: inputId, name: inputName, handleChange, children, ...rest },
    ref
  ) => {
    return (
      <div
        css={[
          tw`flex items-center bg-white border-[1px] border-gray-100 py-[13px] px-[15px]`,
          twCSS,
        ]}
      >
        <SearchIcon width={24} height={24} />
        <div css={[tw`px-[10px] grow`]}>
          <label htmlFor='search' css={[tw`a11y-hidden`]}>
            검색창
          </label>
          <input
            ref={ref}
            type='text'
            id={inputId ?? 'search'}
            name={inputName ?? 'search'}
            placeholder='검색어를 입력해주세요.'
            css={[tw`w-[100%] outline-none focus:text-gray-800`]}
            onChange={handleChange}
            {...rest}
          />
        </div>
        {children}
      </div>
    );
  }
);

export default SearchBar;
