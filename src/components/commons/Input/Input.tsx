import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';

import { forwardRef, ComponentProps } from 'react';

import clearInputForwardedRefValue from '~utils/clearInputForwardedRefValue';

export interface InputProps
  extends Omit<ComponentProps<'input'>, 'ref' | 'size'> {
  /** input에 해당하는 label 내용입니다. */
  label: string;
  /** label 내용의 show/hidden 여부를 선택합니다. */
  isShowLabel?: boolean;
  /** input type 속성을 선택합니다. */
  type?: 'text' | 'password' | 'tel' | 'email' | 'number' | 'url' | 'search';
  /** input value에 대한 Validation 성공 처리 여부를 선택합니다. */
  success?: boolean;
  /** input value에 대한 Validation 에러 처리 여부를 선택합니다. */
  error?: boolean;
  /** input value에 대한 clear 버튼 생성 여부를 선택합니다. */
  clearable?: boolean;
  /** input 컴포넌트 대한 크기를 선택합니다. */
  size?: 'small' | 'default' | 'large';
  /** input id 속성값입니다. */
  id?: string;
  /** input name 속성값입니다. */
  name?: string;
}

const Container = ({
  children,
  success,
  error,
  size,
}: {
  children: React.ReactNode;
  success: InputProps['success'];
  error: InputProps['error'];
  size: InputProps['size'];
}) => {
  return (
    <StyledContainer $success={success} $error={error} $size={size}>
      {children}
    </StyledContainer>
  );
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      isShowLabel = false,
      type = 'text',
      success = false,
      error = false,
      clearable = false,
      size = 'default',
      id = 'search',
      name = 'search',
      ...restProps
    }: InputProps,
    ref
  ): JSX.Element => {
    const LabelComponent = (
      <StyledLabel htmlFor={id} $isShowLabel={isShowLabel}>
        {label}
      </StyledLabel>
    );
    const ClearButton = (
      <button
        onClick={() => {
          clearInputForwardedRefValue(ref);
        }}
      >
        clear
      </button>
    );

    return (
      <Container success={success} error={error} size={size}>
        {LabelComponent}
        <StyledInput type={type} id={id} name={name} ref={ref} {...restProps} />
        {clearable && ClearButton}
      </Container>
    );
  }
);

const statusStyle: { [key: string]: SerializedStyles } = {
  default: css`
    :focus-within {
      border-color: black;
      background-color: rgb(246, 246, 246);
    }
  `,
  success: css`
    :focus-within {
      border-color: rgb(102, 209, 158);
      background-color: rgb(230, 242, 237);
    }
  `,
  error: css`
    :focus-within {
      border-color: rgb(241, 153, 142);
      background-color: rgb(255, 239, 237);
    }
  `,
};

const sizeStyle: { [key: string]: SerializedStyles } = {
  small: css`
    height: 20px;
    padding: 4px 14px;
    border-radius: 4px;
    font-size: 12px;
  `,
  default: css`
    height: 24px;
    padding: 10px 14px;
    border-radius: 8px;
    font-size: 16px;
  `,
  large: css`
    height: 28px;
    padding: 14px;
    border-radius: 8px;
    font-size: 18px;
  `,
};

const basicContainerStyle = css`
  width: fit-content;
  border: 2px solid transparent;
  background-color: rgb(238, 238, 238);
`;

const StyledContainer = styled.div<{
  $success: InputProps['success'];
  $error: InputProps['error'];
  $size: InputProps['size'];
}>`
  ${basicContainerStyle}
  ${({ $success, $error }) =>
    statusStyle[`${$error ? 'error' : $success ? 'success' : 'default'}`]}
  ${({ $size }) => sizeStyle[`${$size}`]}
`;

const StyledLabel = styled.label<{ $isShowLabel: boolean }>`
  display: ${({ $isShowLabel }) => !$isShowLabel && 'none'};
`;

const StyledInput = styled.input`
  border-color: transparent;
  background-color: inherit;
  :focus {
    outline: none;
  }
`;

export default Input;
