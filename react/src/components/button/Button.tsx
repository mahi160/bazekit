import styles from './Button.module.css'

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg' | 'icon'
  variant?: 'default' | 'secondary' | 'alert' | 'outline' | 'ghost' | 'link'
}

export const Button: React.FC<IButtonProps> = (props) => {
  const {
    children,
    className,
    size = 'md',
    variant = 'default',
    type = 'button',
    ...rest
  } = props
  const classes = [styles.button, className].filter(Boolean).join(' ')

  return (
    <button
      className={classes}
      data-size={size}
      data-variant={variant}
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
}
