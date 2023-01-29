interface BaseType {
  title: string;
}

interface ResponseDataType extends BaseType {
  artist: string;
  album: string;
  likeCount: number;
}

export interface ListRequestType extends BaseType {}

export interface ListResponseType {
  data: ResponseDataType[];
}

export interface CreateRequestType extends BaseType {
  artist: string;
  album: string;
}
