import { useMutation } from '@tanstack/react-query';

import MusicService from '~services/musicService';
import * as MusicType from '~types/musicType';

export const useCreateMusic = () => {
  return useMutation(
    (params: MusicType.CreateRequestType) => {
      return MusicService.create(params);
    },
    {
      onSuccess: () => {},
    }
  );
};
