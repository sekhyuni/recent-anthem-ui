import { useQuery } from '@tanstack/react-query';
import * as MusicType from '~types/musicType';
import MusicService from '~services/musicService';

export const useMusicQuery = (title: MusicType.ListRequestType['title']) => {
  return useQuery(
    ['fetchMusic'],
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
