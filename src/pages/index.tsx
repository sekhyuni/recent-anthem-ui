import tw from 'twin.macro';

import { useRef, FormEvent } from 'react';
import Head from 'next/head';

import { useMusicQuery } from '~hooks/useMusicQuery';
import * as MusicType from '~types/musicType';

export default function Home() {
  const titleRef = useRef<HTMLInputElement | null>(null);

  const { data, refetch: fetchMusic } = useMusicQuery(
    titleRef.current?.value as string
  );

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main css={[tw`flex flex-col items-center`]}>
        {data?.data?.data?.map(
          (music: MusicType.ListResponseType['data'][0]) => (
            <div>{music.title}</div>
          )
        )}
        <form
          onSubmit={(event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            fetchMusic();
          }}
        >
          <input ref={titleRef} />
          <input type='submit' hidden />
        </form>
      </main>
    </>
  );
}
