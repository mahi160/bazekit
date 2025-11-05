import { Checkbox as BaseCheckbox } from "@base-ui-components/react/checkbox";
import styles from "./Checkbox.module.css";

export function Checkbox(props: BaseCheckbox.Root.Props) {
  return (
    <BaseCheckbox.Root className={styles.checkbox} {...props}>
      <BaseCheckbox.Indicator className={styles.indicator} keepMounted>
        <CheckIcon />
      </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
  );
}

function CheckIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="14px"
      viewBox="0 -960 960 960"
      width="14px"
      focusable={false}
      aria-hidden
      {...props}
    >
      <path d="M382-200 113-469l97-97 172 173 369-369 97 96-466 466Z" />
    </svg>
  );
}
