import { useQuery } from '@tanstack/react-query';
import * as MusicType from '~types/musicType';
import MusicService from '~services/musicService';
import TopMusicService from '~services/topMusicService';

export const useReadMusic = (
  queryKey: string[],
  filter: string,
  keyword: string,
  currentPage: MusicType.ListRequestType['page']
) => {
  return useQuery(
    [queryKey, filter, keyword, currentPage],
    () => {
      const params: MusicType.ListRequestType = {
        filter,
        keyword,
        page: currentPage,
        limit: 10,
      };
      return queryKey.includes('fetchMusic')
        ? MusicService.list(params)
        : TopMusicService.list(params);
    },
    {
      refetchOnWindowFocus: false,
      retry: false,
      onSuccess: (data) => {},
    }
  );
};
