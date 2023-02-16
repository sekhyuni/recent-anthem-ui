import { useRef } from 'react';

import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
};

export const Small = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Input
      ref={inputRef}
      label='input label'
      size='small'
      placeholder='Small Input'
    />
  );
};

export const Default = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Input ref={inputRef} label='input label' placeholder='Default Input' />
  );
};

export const Large = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Input
      ref={inputRef}
      label='input label'
      size='large'
      placeholder='Large Input'
    />
  );
};

export const Success = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Input
      ref={inputRef}
      label='input label'
      placeholder='Success Input'
      success
    />
  );
};

export const Error = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Input ref={inputRef} label='input label' placeholder='Error Input' error />
  );
};

export const Readonly = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Input
      ref={inputRef}
      label='input label'
      placeholder='Readonly Input'
      readOnly
    />
  );
};

export const Disabled = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Input
      ref={inputRef}
      label='input label'
      placeholder='Disabled Input'
      disabled
    />
  );
};

export const Clearable = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Input
      ref={inputRef}
      label='input label'
      placeholder='Clearable Input'
      clearable
    />
  );
};

export const Search = () => {
  const firstInputRef = useRef<HTMLInputElement | null>(null);
  const secondInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <form>
      <Input
        ref={firstInputRef}
        label='input label'
        type='search'
        placeholder='Search Input'
        name='parameter1'
      />
      <Input
        ref={secondInputRef}
        label='input label'
        type='search'
        placeholder='Search Input'
        name='parameter2'
      />
      <input type='submit' />
    </form>
  );
};
