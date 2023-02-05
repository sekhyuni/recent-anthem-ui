interface BaseType {
  title: string;
}

interface MetaBaseType {
  count: number;
  message: string;
}

interface ResponseDataType extends BaseType {
  _id: string;
  artist: string;
  album: string;
  likeCount: number;
}

export interface ListRequestType extends BaseType {
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
