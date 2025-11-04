import { Switch as BaseSwitch } from "@base-ui-components/react/switch";
import styles from "./Switch.module.css";
import * as React from "react";

export interface ISwitchProps extends BaseSwitch.Root.Props {
  color?: "brand" | "accent" | "alert";
  size?: "sm" | "md" | "lg";
}

export const Switch = React.forwardRef<HTMLButtonElement, ISwitchProps>(
  ({ className = "", color, size, ...rest }, ref) => {
    return (
      <BaseSwitch.Root
        ref={ref}
        data-color={color}
        data-size={size}
        className={`${styles.switch} ${className}`.trim()}
        {...rest}
      >
        <BaseSwitch.Thumb className={styles.thumb} />
      </BaseSwitch.Root>
    );
  }
);

Switch.displayName = "Switch";
