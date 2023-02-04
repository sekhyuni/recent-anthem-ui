import { useQuery } from '@tanstack/react-query';
import * as MusicType from '~types/musicType';
import MusicService from '~services/musicService';

export const useMusicRead = (title: MusicType.ListRequestType['title']) => {
  return useQuery(
    ['fetchMusic', title],
    () => {
      const params: MusicType.ListRequestType = {
        title,
      };
      return MusicService.list(params);
    },
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {},
    }
  );
};
