import tw from 'twin.macro';

import { useState, useRef, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/router';

import { format } from 'date-fns';

import Pagination from '~components/commons/Pagination/Pagination';
import SearchBar from '~components/commons/SearchBar/SearchBar';
import MusicTable from '~components/presenters/Music/MusicTable';
import TimeArea from '~components/presenters/Time/TimeArea';
import { useClickOutside } from '~hooks/useClickOutside';
import { useReadMusic } from '~hooks/useReadMusic';

const TopMusicContainer = (): JSX.Element => {
  const router = useRouter();

  const currentTime = format(new Date(), 'yyyyMMddHH');

  const [filter, setFilter] = useState<string>('title');
  // useQuery의 query param에서 keyword를 observing을 하기 위해 추가로 state 선언
  const [keyword, setKeyword] = useState<string>(
    (router.query.keyword as string) || ''
  );
  const [currentPage, setCurrentPage] = useState<number>(
    Number(router.query.currentPage) || 1
  );
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
  const [time, setTime] = useState<string>(
    (router.query.time as string) || currentTime
  );

  const keywordRef = useRef<HTMLInputElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const onSuccess = (data: any) => {
    // Success Handling
  };
  const onError = (error: any) => {
    // Error Handling
  };

  const { data: listOfMusic, isLoading } = useReadMusic(
    {
      onSuccess,
      onError,
    },
    'fetchTopMusic',
    filter,
    keyword,
    currentPage,
    time
  );

  const listOfCanSelectTime = Array.from(
    { length: Number(currentTime.slice(-2)) + 1 },
    (_, idx) => `${String(idx).padStart(2, '0')}:00`
  ).reverse();

  useClickOutside(dropdownRef, buttonRef, setIsOpenDropdown);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setKeyword(keywordRef.current?.value as string);

    if (currentPage !== 1) {
      setCurrentPage(1);
    }

    router.push({
      pathname: router.pathname,
      query: {
        filter,
        keyword: keywordRef.current?.value,
        currentPage: 1,
        limit: 25,
        time,
      },
    });
  };
  const handleChangePage = (currentPage: number) => {
    router.push({
      pathname: router.pathname,
      query: {
        filter,
        keyword,
        currentPage,
        limit: 25,
        time,
      },
    });
  };
  const handleChangeTime = (item: string) => {
    const formattedCurrentTime = `${currentTime.slice(0, 8)}${item.slice(
      0,
      2
    )}`;

    setTime(formattedCurrentTime);

    router.push({
      pathname: router.pathname,
      query: {
        filter,
        keyword,
        currentPage,
        limit: 25,
        time: formattedCurrentTime,
      },
    });
  };

  useEffect(() => {
    keywordRef.current!.value = (router.query.keyword as string) || '';
  }, [router.query.keyword]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <SearchBar ref={keywordRef} placeholder='노래 제목을 입력해주세요.' />
        <input type='submit' hidden />
      </form>
      <TimeArea
        time={time}
        objOfRef={{ dropdownRef, buttonRef }}
        isOpenDropdown={isOpenDropdown}
        setIsOpenDropdown={setIsOpenDropdown}
        listOfCanSelectTime={listOfCanSelectTime}
        handleChangeTime={handleChangeTime}
        isLoading={isLoading}
      />
      <MusicTable data={listOfMusic?.data ?? []} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        total={listOfMusic?.meta?.count ?? 0}
        limit={25}
        handleChangePage={handleChangePage}
        twCSS={tw`my-[20px]`}
      />
    </>
  );
};

export default TopMusicContainer;
