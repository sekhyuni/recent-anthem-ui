import tw from 'twin.macro';

import { useRef } from 'react';

import SearchBar from './SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
};

export const Default = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div css={[tw`w-[900px] h-[200px]`]}>
      <SearchBar ref={inputRef} />
    </div>
  );
};
