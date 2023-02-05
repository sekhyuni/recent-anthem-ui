import type { ReactElement } from 'react';

import type { NextPageWithLayout } from '~pages/_app';
import Layout from '~layouts/Layout';
import TopMusicContainer from '~src/containers/TopMusicContainer';

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
