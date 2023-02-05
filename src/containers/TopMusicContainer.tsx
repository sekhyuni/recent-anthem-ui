import { useState, useRef, FormEvent } from 'react';

import Pagination from '~components/commons/Pagination/Pagination';
import SearchBar from '~components/commons/SearchBar/SearchBar';
import MusicList from '~components/presenters/MusicList/MusicList';

import { useMusicRead } from '~hooks/useMusicRead';

const TopMusicContainer = (): JSX.Element => {
  const [filter, setFilter] = useState<string>('title');
  const [keyword, setKeyword] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const keywordRef = useRef<HTMLInputElement | null>(null);

  const { data: listOfMusic } = useMusicRead(
    ['fetchTopMusic'],
    filter,
    keyword,
    currentPage
  );

  return (
    <>
      <form
        onSubmit={(event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();

          setKeyword(keywordRef.current?.value as string);

          if (currentPage !== 1) {
            setCurrentPage(1);
          }
        }}
      >
        <SearchBar ref={keywordRef} placeholder='노래 제목을 입력해주세요.' />
        <input type='submit' hidden />
      </form>
      <h1>{listOfMusic?.data?.data[0].crawling_time} 기준</h1>
      <MusicList listOfMusic={listOfMusic} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        total={listOfMusic?.data?.meta?.count ?? 0}
        limit={10}
      />
    </>
  );
};

export default TopMusicContainer;
