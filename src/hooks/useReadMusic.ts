import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';

import * as MusicType from '~types/musicType';
import MusicService from '~services/musicService';
import TopMusicService from '~services/topMusicService';

export const useReadMusic = (
  {
    onSuccess,
    onError,
  }: {
    onSuccess: (data: AxiosResponse<any, any>) => void;
    onError: (error: any) => void;
  },
  queryKey: string[],
  filter: string,
  keyword: string,
  currentPage: MusicType.ListRequestType['page'],
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
      return queryKey.includes('fetchMusic')
        ? MusicService.list(params)
        : TopMusicService.list(params);
    },
    {
      refetchOnWindowFocus: false,
      retry: false,
      onSuccess,
      onError,
    }
  );
};
