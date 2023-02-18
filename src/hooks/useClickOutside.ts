import { useEffect, RefObject } from 'react';

export const useClickOutside = (
  dropdownRef: RefObject<HTMLDivElement>,
  buttonRef: RefObject<HTMLButtonElement>,
  setIsOpenDropdown: (isOpenDropdown: boolean) => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !dropdownRef.current?.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsOpenDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef, buttonRef, setIsOpenDropdown]);
};
