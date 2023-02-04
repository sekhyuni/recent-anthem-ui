import tw, { TwStyle } from 'twin.macro';

import { forwardRef, ReactNode, ComponentProps, ChangeEvent } from 'react';

import { ReactComponent as SearchIcon } from '~assets/svg/icon-search.svg';

export interface ISearchBarProps extends ComponentProps<'input'> {
  /** Input onChange Event Handler */
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /** When adding a layer like the filter option, put it as a children element. */
  children?: ReactNode;
  /** Add TwStyle to Component Root */
  twCSS?: TwStyle;
}

const SearchBar = forwardRef<HTMLInputElement, ISearchBarProps>(
  (
    { id: inputId, name: inputName, handleChange, children, twCSS, ...rest },
    ref
  ) => {
    return (
      <div
        css={[
          tw`flex flex-row items-center border-[1px] border-gray-100 py-[13px] px-[15px] bg-white`,
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
