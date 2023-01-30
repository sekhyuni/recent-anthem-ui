import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = () => <Button primary={true} label='Button' />;

export const Secondary = () => <Button label='Button' />;

export const Large = () => <Button size='large' label='Button' />;

export const Medium = () => <Button size='medium' label='Button' />;

export const Small = () => <Button size='small' label='Button' />;
