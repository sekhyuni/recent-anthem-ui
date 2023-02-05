import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = () => <Button label='Button' primary={true} />;

export const Secondary = () => <Button label='Button' />;

export const Large = () => <Button label='Button' size='large' />;

export const Medium = () => <Button label='Button' size='medium' />;

export const Small = () => <Button label='Button' size='small' />;
