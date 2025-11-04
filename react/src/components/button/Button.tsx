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
    size = "md",
    variant = "default",
    type = "button",
    rounded,
    floating,
    ...rest
  } = props;

  return (
    <button
      className={styles.button}
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
