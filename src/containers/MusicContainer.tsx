import { useState, useRef, FormEvent } from 'react';

import Pagination from '~components/commons/Pagination/Pagination';
import SearchBar from '~components/commons/SearchBar/SearchBar';
import MusicList from '~components/presenters/MusicList/MusicList';

import { useMusicRead } from '~hooks/useMusicRead';

const MusicContainer = (): JSX.Element => {
  const [title, setTitle] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const titleRef = useRef<HTMLInputElement | null>(null);

  const { data: musics } = useMusicRead(title);

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
      <MusicList musics={musics} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        total={100}
        limit={10}
      />
    </>
  );
};

export default MusicContainer;
