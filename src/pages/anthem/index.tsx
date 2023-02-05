import type { ReactElement } from 'react';

import type { NextPageWithLayout } from '~pages/_app';
import Layout from '~layouts/Layout';
import MusicContainer from '~src/containers/MusicContainer';

const Anthem: NextPageWithLayout = (): JSX.Element => {
  return (
    <section>
      <MusicContainer />
    </section>
  );
};

Anthem.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Anthem;
