import axios from '~services/index';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import tw from 'twin.macro';

const Join = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery(
    ['fetchUser'],
    () => {
      return axios.get('/user/kimseokhyun');
    },
    {
      onSuccess: (data) => {},
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
      onSuccess: (data) => {
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
      onSuccess: (data) => {
        queryClient.invalidateQueries(['fetchUser']);
      },
    }
  );
  const { mutate: deleteUser } = useMutation(
    () => {
      return axios.delete('/user/kimseokhyun');
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(['fetchUser']);
      },
    }
  );
  return (
    <div css={[tw`flex flex-col items-center`]}>
      <h3>{data?.data?.result?.userId}</h3>
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
    </div>
  );
};

export default Join;
