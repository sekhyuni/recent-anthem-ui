import { useState, useRef, FormEvent } from 'react';

import SearchBar from '~components/commons/SearchBar/SearchBar';
import MusicList from '~components/presenters/MusicList/MusicList';

import { useMusicRead } from '~hooks/useMusicRead';

const MusicContainer = (): JSX.Element => {
  const [title, setTitle] = useState<string>('');

  const titleRef = useRef<HTMLInputElement | null>(null);

  const { data } = useMusicRead(title);

  return (
    <>
      <form
        onSubmit={(event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();

          setTitle(titleRef.current?.value as string);
        }}
      >
        <SearchBar ref={titleRef} placeholder='노래 제목을 입력해주세요.' />
        <input type='submit' hidden />
      </form>
      <MusicList data={data} />
    </>
  );
};

export default MusicContainer;
