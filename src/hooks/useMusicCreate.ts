import { useMutation } from '@tanstack/react-query';
import * as MusicType from '~types/musicType';
import MusicService from '~services/musicService';

export const useMusicCreate = () => {
  return useMutation(
    (params: MusicType.CreateRequestType) => {
      return MusicService.create(params);
    },
    {
      onSuccess: () => {},
    }
  );
};
