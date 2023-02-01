import tw from 'twin.macro';

import { useRef, FormEvent } from 'react';
import type { ReactElement } from 'react';

import type { NextPageWithLayout } from '~pages/_app';
import Layout from '~layouts/Layout';

import { useMusicQuery } from '~hooks/useMusicQuery';
import * as MusicType from '~types/musicType';

const Anthem: NextPageWithLayout = () => {
  const titleRef = useRef<HTMLInputElement | null>(null);

  const { data, refetch: fetchMusic } = useMusicQuery(
    titleRef.current?.value as string
  );

  return (
    <section css={[tw`flex flex-col items-center flex-1`]}>
      {data?.data?.data?.map((music: MusicType.ListResponseType['data'][0]) => (
        <div>{music.title}</div>
      ))}
      <form
        onSubmit={(event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();

          fetchMusic();
        }}
      >
        <input ref={titleRef} />
        <input type='submit' hidden />
      </form>
    </section>
  );
};

Anthem.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Anthem;
