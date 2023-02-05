import { useQuery } from '@tanstack/react-query';
import * as MusicType from '~types/musicType';
import MusicService from '~services/musicService';
import TopMusicService from '~services/topMusicService';

export const useMusicRead = (
  queryKey: string[],
  title: MusicType.ListRequestType['title'],
  currentPage: MusicType.ListRequestType['page']
) => {
  return useQuery(
    [queryKey, title, currentPage],
    () => {
      const params: MusicType.ListRequestType = {
        title,
        page: currentPage,
        limit: 10,
      };
      return queryKey.includes('fetchMusic')
        ? MusicService.list(params)
        : TopMusicService.list(params);
    },
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {},
    }
  );
};
