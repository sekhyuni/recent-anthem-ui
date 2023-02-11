import styled from '@emotion/styled';
import tw from 'twin.macro';

import { ReactNode } from 'react';

const BasicStyledItem = styled.span``;

const Default = () => {
  return <div></div>;
};

const Album = ({ children }: { children: ReactNode }) => {
  return (
    <span
      css={[
        tw`inline-block w-[calc(100%-36px)] overflow-hidden text-ellipsis whitespace-nowrap`,
      ]}
    >
      {children}
    </span>
  );
};

export { BasicStyledItem, Default, Album };
