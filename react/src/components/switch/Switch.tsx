import { Switch as BaseSwitch } from "@base-ui-components/react/switch";
import styles from "./Switch.module.css";

export interface ISwitchProps extends BaseSwitch.Root.Props {
  color?: "brand" | "accent" | "alert";
  size?: "sm" | "md" | "lg";
}
export const Switch: React.FC<ISwitchProps> = (props) => {
  const { className, color, size, ...rest } = props;
  return (
    <BaseSwitch.Root
      data-color={color}
      data-size={size}
      className={styles.switch}
      {...rest}
    >
      <BaseSwitch.Thumb className={styles.thumb}></BaseSwitch.Thumb>
    </BaseSwitch.Root>
  );
};
