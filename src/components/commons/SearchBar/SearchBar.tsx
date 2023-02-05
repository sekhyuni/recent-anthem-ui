import tw, { TwStyle } from 'twin.macro';

import { forwardRef, ReactNode, ComponentProps, ChangeEvent } from 'react';

import { ReactComponent as SearchIcon } from '~assets/svg/icon-search.svg';

export interface ISearchBarProps extends ComponentProps<'input'> {
  /** input onChange event handler */
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /** add a layer like the filter option */
  right?: ReactNode;
  /** add TwStyle to component root */
  twCSS?: TwStyle;
}

const SearchBar = forwardRef<HTMLInputElement, ISearchBarProps>(
  (
    { id: inputId, name: inputName, handleChange, right, twCSS, ...rest },
    ref
  ): JSX.Element => {
    return (
      <div
        css={[
          tw`flex flex-row items-center border-[1px] border-gray-100 py-[13px] px-[15px] bg-white`,
          twCSS,
        ]}
      >
        <SearchIcon width={24} height={24} />
        <div css={[tw`px-[10px] grow`]}>
          <label css={[tw`a11y-hidden`]} htmlFor={inputId ?? 'search'}>
            검색창
          </label>
          <input
            css={[tw`w-[100%] outline-none focus:text-gray-800`]}
            type='text'
            ref={ref}
            id={inputId ?? 'search'}
            name={inputName ?? 'search'}
            onChange={handleChange}
            placeholder='검색어를 입력해주세요.'
            {...rest}
          />
        </div>
        {right}
      </div>
    );
  }
);

export default SearchBar;
