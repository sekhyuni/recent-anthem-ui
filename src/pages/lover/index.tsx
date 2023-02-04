import tw from 'twin.macro';

import type { ReactElement } from 'react';

import type { NextPageWithLayout } from '~pages/_app';
import Layout from '~layouts/Layout';

const Lover: NextPageWithLayout = () => {
  return (
    <section css={[tw`flex flex-col items-center`]}>This is Lover Page</section>
  );
};

Lover.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Lover;
