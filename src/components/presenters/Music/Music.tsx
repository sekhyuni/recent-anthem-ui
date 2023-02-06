import tw from 'twin.macro';

import { ReactNode, ComponentProps } from 'react';

export interface IMusicProps extends ComponentProps<'li'> {
  rank?: number;
  title: string;
  artist: string;
  album: string;
  likeCount?: number;
  right?: ReactNode;
}

const Music = ({
  rank,
  title,
  artist,
  album,
  likeCount,
  right,
}: IMusicProps): JSX.Element => {
  return (
    <li css={[tw`flex flex-row items-center h-[60px]`]}>
      <img></img>
      {typeof rank !== 'undefined' && <div>랭킹: {rank}&nbsp;</div>}
      <div>제목: {title}&nbsp;</div>
      <div>가수: {artist}&nbsp;</div>
      <div>앨범: {album}&nbsp;</div>
      {typeof likeCount !== 'undefined' && <div>좋아요: {likeCount}</div>}
      {right}
    </li>
  );
};

export default Music;
