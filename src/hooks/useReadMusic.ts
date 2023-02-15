import { useQuery } from '@tanstack/react-query';

import * as MusicType from '~types/musicType';
import MusicService from '~services/musicService';
import TopMusicService from '~services/topMusicService';

export const useReadMusic = (
  {
    onSuccess,
    onError,
  }: {
    onSuccess: (data: any) => void;
    onError: (error: any) => void;
  },
  queryKey: string,
  filter: string,
  keyword: string,
  currentPage: number,
  time?: string
) => {
  return useQuery(
    [queryKey, filter, keyword, currentPage, time],
    () => {
      const params: MusicType.ListRequestType = {
        filter,
        keyword,
        page: currentPage,
        limit: 25,
        time,
      };
      return queryKey === 'fetchMusic'
        ? MusicService.list(params)
        : TopMusicService.list(params);
    },
    {
      onSuccess,
      onError,
    }
  );
};
