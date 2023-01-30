import tw from 'twin.macro';

import { useRef, FormEvent } from 'react';

import { useMusicCreate } from '~hooks/useMusicCreate';
import * as MusicType from '~types/musicType';

const Admin = () => {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const artistRef = useRef<HTMLInputElement | null>(null);
  const albumRef = useRef<HTMLInputElement | null>(null);

  const { mutate: createMusic } = useMusicCreate();

  return (
    <form
      css={[tw`flex flex-col items-center`]}
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const params: MusicType.CreateRequestType = {
          title: titleRef.current?.value as string,
          artist: artistRef.current?.value as string,
          album: albumRef.current?.value as string,
        };
        createMusic(params);
      }}
    >
      <div css={[tw`flex flex-row`]}>
        <label htmlFor='titleInput'>노래 제목</label>
        <input type='text' id='titleInput' ref={titleRef} />
      </div>
      <div css={[tw`flex flex-row`]}>
        <label htmlFor='artistInput'>가수</label>
        <input type='text' id='artistInput' ref={artistRef} />
      </div>
      <div css={[tw`flex flex-row`]}>
        <label htmlFor='albumInput'>앨범</label>
        <input type='text' id='albumInput' ref={albumRef} />
      </div>
      <input type='submit' hidden />
    </form>
  );
};

export default Admin;
