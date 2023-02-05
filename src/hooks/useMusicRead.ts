import { useQuery } from '@tanstack/react-query';
import * as MusicType from '~types/musicType';
import MusicService from '~services/musicService';

export const useMusicRead = (
  title: MusicType.ListRequestType['title'],
  currentPage: MusicType.ListRequestType['page']
) => {
  return useQuery(
    ['fetchMusic', title, currentPage],
    () => {
      const params: MusicType.ListRequestType = {
        title,
        page: currentPage,
        limit: 10,
      };
      return MusicService.list(params);
    },
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {},
    }
  );
};
