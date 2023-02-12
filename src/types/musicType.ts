interface BaseType {
  title: string;
}

interface MetaBaseType {
  count: number;
  message: string;
  crawling_time?: string;
}

interface ResponseDataType extends BaseType {
  _id: string;
  rank?: number;
  artist: string;
  album: string;
  likeCount?: number;
}

export interface ListRequestType {
  filter: string;
  keyword: string;
  page: number;
  limit: number;
}

export interface ListResponseType {
  meta: MetaBaseType;
  data: ResponseDataType[];
}

export interface CreateRequestType extends BaseType {
  artist: string;
  album: string;
}
