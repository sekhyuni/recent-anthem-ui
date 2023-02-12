import tw from 'twin.macro';

import { AxiosResponse } from 'axios';

import Music from '~components/presenters/Music/Music';
import * as MusicType from '~types/musicType';

export interface IMusicLists {
  listOfMusic: AxiosResponse<any, any> | undefined;
}

const MusicList = ({ listOfMusic }: IMusicLists): JSX.Element => {
  return (
    <ul css={[tw`w-[1000px]`]}>
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
