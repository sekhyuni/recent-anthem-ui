import { useEffect, RefObject } from 'react';

export const useOnClickOutside = (
  dropdownRef: RefObject<HTMLDivElement>,
  buttonRef: RefObject<HTMLButtonElement>,
  setIsOpenDropdown: (isOpenDropdown: boolean) => void
) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      !dropdownRef.current?.contains(event.target as Node) &&
      !buttonRef.current?.contains(event.target as Node)
    ) {
      setIsOpenDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
};
