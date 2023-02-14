import axios from './index';
import * as MusicType from '~types/musicType';

export default class TopMusicService {
  static async list(params: MusicType.ListRequestType) {
    const { data } = await axios.get('/music/top', { params });
    return data;
  }
}
