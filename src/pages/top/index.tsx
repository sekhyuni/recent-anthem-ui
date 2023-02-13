import type { ReactElement } from 'react';

import TopMusicContainer from '~src/containers/TopMusicContainer';
import Layout from '~layouts/Layout';
import type { NextPageWithLayout } from '~pages/_app';

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
