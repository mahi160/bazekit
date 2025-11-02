import styles from "./Button.module.css";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg" | "icon";
  variant?: "default" | "secondary" | "alert" | "outline" | "ghost" | "link";
  rounded?: boolean;
  floating?: boolean;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const {
    children,
    className,
    size = "md",
    variant = "default",
    type = "button",
    rounded,
    floating,
    ...rest
  } = props;
  const classes = [styles.button, className].filter(Boolean).join(" ");

  return (
    <button
      className={classes}
      data-size={size}
      data-variant={variant}
      data-rounded={rounded ? "true" : "false"}
      data-floating={floating ? "true" : "false"}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
