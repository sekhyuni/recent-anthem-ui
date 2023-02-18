import { ForwardedRef } from 'react';

const clearInputForwardedRefValue = (
  ref: ForwardedRef<HTMLInputElement>
): void => {
  if (typeof ref !== 'function') {
    if (!ref?.current) return;

    ref.current.value = '';
  }
};

export default clearInputForwardedRefValue;
