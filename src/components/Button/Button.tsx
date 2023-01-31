import './button.css';

export interface IButtonProps {
  /** Button Contents */
  label: string;
  /** Button Size */
  size?: 'small' | 'medium' | 'large';
  /** Background Color */
  backgroundColor?: string;
  /** Is Primary */
  primary?: boolean;
  /** Click Handler */
  onClick?: () => void;
}

const Button = ({
  label,
  size = 'medium',
  primary = false,
  backgroundColor,
  ...rest
}: IButtonProps) => {
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
