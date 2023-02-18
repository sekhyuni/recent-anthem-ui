import tw from 'twin.macro';

import { forwardRef, ComponentProps } from 'react';

import { v4 as uuid } from 'uuid';

export interface IDropdownProps extends ComponentProps<'div'> {
  listOfItem: string[];
  setItem: (item: string) => void;
  setIsOpenDropdown: (isOpenDropdown: boolean) => void;
}

const Dropdown = forwardRef<HTMLDivElement, IDropdownProps>(
  (
    { listOfItem, setItem, setIsOpenDropdown, ...rest }: IDropdownProps,
    dropdownRef
  ) => {
    return (
      <div
        id='dropdown-wrapper'
        css={[tw`absolute top-[30px] right-[20px] bg-white`]}
        ref={dropdownRef}
        {...rest}
      >
        <ul>
          {listOfItem.map((item: string) => (
            <li
              css={[tw`cursor-pointer`]}
              key={uuid()}
              onClick={() => {
                setItem(item);
                setIsOpenDropdown(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
Dropdown.displayName = 'Dropdown';

export default Dropdown;
