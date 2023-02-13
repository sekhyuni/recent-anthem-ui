import tw from 'twin.macro';

import { useState, useRef, FormEvent } from 'react';

import { AxiosResponse } from 'axios';
import { format } from 'date-fns'

import { ReactComponent as ArrowDownIcon } from '~assets/svg/icon-arrow-down.svg';
import Dropdown from '~components/commons/Dropdown/Dropdown';
import Pagination from '~components/commons/Pagination/Pagination';
import SearchBar from '~components/commons/SearchBar/SearchBar';
import MusicTable from '~components/presenters/Music/MusicTable';
import Time from '~components/presenters/Time';
import { useClickOutside } from '~hooks/useClickOutside';
import { useReadMusic } from '~hooks/useReadMusic';

const TopMusicContainer = (): JSX.Element => {
  const currentTime = format(new Date(), 'yyyyMMddHH');

  const [filter, setFilter] = useState<string>('title');
  const [keyword, setKeyword] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
  const [time, setTime] = useState<string>(currentTime);

  const keywordRef = useRef<HTMLInputElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const onSuccess = (data: AxiosResponse<any, any>) => {
    // Success Handling
  }
  const onError = (error: any) => {
    // if (error.response.data.meta.count === 0) {
    //   if (confirm('선택하신 시간대에 데이터가 없습니다. 가장 최신 데이터를 가져올까요?')) {
    //     // 가장 최신 데이터 API 요청
    //   }
    // }
  }

  const { data: listOfMusic, isLoading } = useReadMusic(
    {
      onSuccess,
      onError,
    },
    ['fetchTopMusic'],
    filter,
    keyword,
    currentPage,
    time,
  );

  const listOfCanSelectTime = Array.from(
    { length: Number(currentTime.slice(-2)) + 1 },
    (_, idx) => `${String(idx).padStart(2, '0')}:00`
  ).reverse();

  useClickOutside(dropdownRef, buttonRef, setIsOpenDropdown);

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
      <div
        id='time-container'
        css={[tw`flex flex-row justify-center py-[10px] text-2xl`]}
      >
        {isLoading ? (
          <span css={[tw`h-[32px]`]}></span>
        ) : (
          <div css={[tw`relative`]}>
            <div id='time-wrapper'>
              <Time time={time} />
              <button
                ref={buttonRef}
                onClick={() => {
                  setIsOpenDropdown(!isOpenDropdown);
                }}
              >
                <ArrowDownIcon />
              </button>
            </div>
            {isOpenDropdown && (
              <Dropdown
                ref={dropdownRef}
                listOfItem={listOfCanSelectTime}
                setItem={(item: string) => {
                  setTime(`${currentTime.slice(0, 8)}${item.slice(0, 2)}`);
                }}
                setIsOpenDropdown={setIsOpenDropdown}
              />
            )}
          </div>
        )}
      </div>
      <MusicTable data={listOfMusic?.data?.data ?? []} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        total={listOfMusic?.data?.meta?.count ?? 0}
        limit={25}
        twCSS={tw`my-[20px]`}
      />
    </>
  );
};

export default TopMusicContainer;
