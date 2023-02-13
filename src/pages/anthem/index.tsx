import type { ReactElement } from 'react';

import MusicContainer from '~containers/MusicContainer';
import Layout from '~layouts/Layout';
import type { NextPageWithLayout } from '~pages/_app';

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
