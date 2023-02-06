import tw from 'twin.macro';

import { useRef, FormEvent } from 'react';

import { useCreateMusic } from '~hooks/useCreateMusic';
import * as MusicType from '~types/musicType';

const Admin = (): JSX.Element => {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const artistRef = useRef<HTMLInputElement | null>(null);
  const albumRef = useRef<HTMLInputElement | null>(null);

  const { mutate: createMusic } = useCreateMusic();

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
        <label css={[tw`a11y-hidden`]} htmlFor='titleInput'>
          노래 제목
        </label>
        <input type='text' id='titleInput' ref={titleRef} />
      </div>
      <div css={[tw`flex flex-row`]}>
        <label css={[tw`a11y-hidden`]} htmlFor='artistInput'>
          가수
        </label>
        <input type='text' id='artistInput' ref={artistRef} />
      </div>
      <div css={[tw`flex flex-row`]}>
        <label css={[tw`a11y-hidden`]} htmlFor='albumInput'>
          앨범
        </label>
        <input type='text' id='albumInput' ref={albumRef} />
      </div>
      <input type='submit' hidden />
    </form>
  );
};

export default Admin;
