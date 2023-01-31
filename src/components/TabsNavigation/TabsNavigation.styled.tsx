import styled from '@emotion/styled';
import { css } from '@emotion/react';
import tw from 'twin.macro';

import { ITabsNavigationProps } from './TabsNavigation';

interface ITabsNavigationNameProps extends Pick<ITabsNavigationProps, 'size'> {}

const normalSize = css`
  ${tw`text-[18px] leading-[32px]`}
`;

const smallSize = css`
  ${tw`text-[16px] leading-[26px]`}
`;

const normalSizeActive = css`
  ${tw`text-[20px] tracking-[-.01em] font-black text-blue-900`}
`;

const smallSizeActive = css`
  ${tw`text-[16px] tracking-[-.02em] font-bold text-blue-900`}
`;

export const SpanOfNavigationName = styled.span<
  ITabsNavigationNameProps & { isActive: boolean }
>(({ size, isActive }) => [
  tw`absolute top-1/2 left-1/2 w-full text-center tracking-[-.02em] font-normal text-gray-900`,
  size === 'normal' ? normalSize : smallSize,
  isActive && (size === 'normal' ? normalSizeActive : smallSizeActive),
]);
