import type { ReactElement } from 'react';

import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';

import TopMusicContainer from '~containers/TopMusicContainer';
import Layout from '~layouts/Layout';
import type { NextPageWithLayout } from '~pages/_app';
import TopMusicService from '~services/topMusicService';
import * as MusicType from '~types/musicType';

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['fetchInitTopMusic'], () => {
    const params: MusicType.ListRequestType = {
      filter: 'title',
      keyword: '',
      page: 1,
      limit: 25,
      time: format(new Date(), 'yyyyMMddHH'),
    };
    return TopMusicService.list(params);
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Top: NextPageWithLayout = (): JSX.Element => {
  return (
    <section>
      <TopMusicContainer />
    </section>
  );
};

Top.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Top;

