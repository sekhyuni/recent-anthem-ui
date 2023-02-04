import tw from 'twin.macro';

import { useState, useRef, FormEvent } from 'react';
import type { ReactElement } from 'react';

import type { NextPageWithLayout } from '~pages/_app';
import Layout from '~layouts/Layout';
import SearchBar from '~components/SearchBar/SearchBar';

import { useMusicRead } from '~hooks/useMusicRead';
import * as MusicType from '~types/musicType';

const Top: NextPageWithLayout = () => {
  const [title, setTitle] = useState<string>('');

  const titleRef = useRef<HTMLInputElement | null>(null);

  const { data } = useMusicRead(title);

  return (
    <section>
      <form
        onSubmit={(event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();

          setTitle(titleRef.current?.value as string);
        }}
      >
        <SearchBar ref={titleRef} placeholder='노래 제목을 입력해주세요.' />
        <input type='submit' hidden />
      </form>
      <div css={[tw`flex flex-col items-center`]}>
        {data?.data?.data?.map(
          (music: MusicType.ListResponseType['data'][0]) => (
            <div>{music.title}</div>
          )
        )}
      </div>
    </section>
  );
};

Top.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Top;
