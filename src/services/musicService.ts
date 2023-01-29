import axios from './index';
import * as MusicType from '../types/musicType';

export default class MusicService {
  static async list(params: MusicType.ListRequestType) {
    return axios.get('/music', { params });
  }

  static async create(params: MusicType.CreateRequestType) {
    return axios.post('/music', params);
  }
}
