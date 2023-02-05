import './button.css';

export interface IButtonProps {
  /** button contents */
  label: string;
  /** button size */
  size?: 'small' | 'medium' | 'large';
  /** background color */
  backgroundColor?: string;
  /** is primary */
  primary?: boolean;
  /** click handler */
  onClick?: () => void;
}

const Button = ({
  label,
  size = 'medium',
  primary = false,
  backgroundColor,
  ...rest
}: IButtonProps): JSX.Element => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      type='button'
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      style={{ backgroundColor }}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
