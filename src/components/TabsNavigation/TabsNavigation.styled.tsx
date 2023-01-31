import styled from '@emotion/styled';
import { css } from '@emotion/react';
import tw from 'twin.macro';

import { ITabsNavigationProps } from './TabsNavigation';

const normalSize = css`
  ${tw`text-[18px] leading-[32px] text-white`}
`;

const smallSize = css`
  ${tw`text-[16px] leading-[26px] text-white`}
`;

export const SpanOfNavigationName = styled.span<
  Pick<ITabsNavigationProps, 'size'>
>(({ size }) => [size === 'normal' ? normalSize : smallSize]);
