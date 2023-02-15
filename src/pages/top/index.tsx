import type { ReactElement } from 'react';
import { NextPageContext } from 'next';

import { dehydrate, QueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';

import TopMusicContainer from '~containers/TopMusicContainer';
import Layout from '~layouts/Layout';
import type { NextPageWithLayout } from '~pages/_app';
import TopMusicService from '~services/topMusicService';
import * as MusicType from '~types/musicType';

export async function getServerSideProps({ query }: NextPageContext) {
  let filter: string = (query.filter as string) || 'title';
  let keyword: string = (query.keyword as string) || '';
  let currentPage: number = Number(query.currentPage) || 1;
  let time: string = (query.time as string) || format(new Date(), 'yyyyMMddHH');

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ['fetchTopMusic', filter, keyword, currentPage, time],
    () => {
      const params: MusicType.ListRequestType = {
        filter,
        keyword,
        page: currentPage,
        limit: 25,
        time,
      };
      return TopMusicService.list(params);
    }
  );

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
