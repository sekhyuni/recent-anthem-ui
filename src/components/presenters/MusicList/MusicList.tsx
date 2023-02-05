import tw from 'twin.macro';

import { ComponentProps } from 'react';

import Music from '~components/commons/Music/Music';

import { AxiosResponse } from 'axios';
import * as MusicType from '~types/musicType';

export interface IMusicLists extends ComponentProps<'ul'> {
  data: AxiosResponse<any, any> | undefined;
}

const MusicList = ({ data }: IMusicLists): JSX.Element => {
  return (
    <ul css={[tw`flex flex-col w-[700px]`]}>
      {data?.data?.data?.map(
        ({
          _id,
          title,
          album,
          artist,
        }: MusicType.ListResponseType['data'][0]) => (
          <Music key={_id} title={title} album={album} artist={artist} />
        )
      )}
    </ul>
  );
};

export default MusicList;
