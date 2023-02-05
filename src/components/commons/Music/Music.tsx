import tw from 'twin.macro';

import { ReactNode, ComponentProps } from 'react';

export interface IMusicProps extends ComponentProps<'li'> {
  title: string;
  album: string;
  artist: string;
  right?: ReactNode;
}

const Music = ({ title, album, artist, right }: IMusicProps): JSX.Element => {
  return (
    <li css={[tw`flex flex-row items-center h-[60px]`]}>
      <img></img>
      <strong>{title}</strong>
      <div>{artist}</div>
      <div>{album}</div>
      {right}
    </li>
  );
};

export default Music;
