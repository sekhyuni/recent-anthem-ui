import type { ReactElement } from 'react';

import TopMusicContainer from '~containers/TopMusicContainer';
import Layout from '~layouts/Layout';
import type { NextPageWithLayout } from '~pages/_app';
import TopMusicService from '~services/topMusicService';
import * as MusicType from '~types/musicType';

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
