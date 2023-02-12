import { useState, useRef, FormEvent } from 'react';

import Pagination from '~components/commons/Pagination/Pagination';
import SearchBar from '~components/commons/SearchBar/SearchBar';
import MusicTable from '~components/presenters/Music/MusicTable';
import { useReadMusic } from '~hooks/useReadMusic';

const MusicContainer = (): JSX.Element => {
  const [filter, setFilter] = useState<string>('title');
  const [keyword, setKeyword] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const keywordRef = useRef<HTMLInputElement | null>(null);

  const { data: listOfMusic } = useReadMusic(
    ['fetchMusic'],
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
      <MusicTable data={listOfMusic?.data?.data ?? []} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        total={listOfMusic?.data?.meta?.count ?? 0}
        limit={10}
      />
    </>
  );
};

export default MusicContainer;
