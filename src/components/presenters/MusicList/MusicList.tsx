import tw from 'twin.macro';

import { ComponentProps } from 'react';

import Music from '~components/commons/Music/Music';

import { AxiosResponse } from 'axios';
import * as MusicType from '~types/musicType';

export interface IMusicLists extends ComponentProps<'ul'> {
  listOfMusic: AxiosResponse<any, any> | undefined;
}

const MusicList = ({ listOfMusic }: IMusicLists): JSX.Element => {
  return (
    <ul css={[tw`flex flex-col w-[1000px]`]}>
      {listOfMusic?.data?.data?.map(
        ({
          _id,
          rank,
          title,
          artist,
          album,
          likeCount,
        }: MusicType.ListResponseType['data'][0]) => (
          <Music
            key={_id}
            rank={rank as number}
            title={title}
            artist={artist}
            album={album}
            likeCount={likeCount as number}
          />
        )
      )}
    </ul>
  );
};

export default MusicList;
