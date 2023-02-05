import tw from 'twin.macro';

import Link from 'next/link';

import axios from '~services/index';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const Join = (): JSX.Element => {
  const queryClient = useQueryClient();

  const { data } = useQuery(
    ['fetchUser'],
    () => {
      return axios.get('/user/kimseokhyun');
    },
    {
      onSuccess: () => {},
    }
  );
  const { mutate: createUser } = useMutation(
    () => {
      return axios.post('/auth/signup', {
        userId: 'kimseokhyun',
        password: '2081',
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['fetchUser']);
      },
    }
  );
  const { mutate: updateUser } = useMutation(
    () => {
      return axios.put('/user/kimseokhyun', {
        password: '2082',
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['fetchUser']);
      },
    }
  );
  const { mutate: deleteUser } = useMutation(
    () => {
      return axios.delete('/user/kimseokhyun');
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['fetchUser']);
      },
    }
  );
  return (
    <section css={[tw`flex flex-col items-center`]}>
      <Link href={'/'}>RSound Logo</Link>
      <h3>{data?.data?.data?.userId}</h3>
      <button
        onClick={() => {
          createUser();
        }}
      >
        회원가입
      </button>
      <button
        onClick={() => {
          updateUser();
        }}
      >
        회원정보 수정
      </button>
      <button
        onClick={() => {
          deleteUser();
        }}
      >
        회원정보 삭제
      </button>
    </section>
  );
};

export default Join;
