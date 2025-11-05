import { Checkbox as BaseCheckbox } from "@base-ui-components/react/checkbox";
import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui-components/react/checkbox-group";
import styles from "./Checkbox.module.css";

export function Checkbox(props: BaseCheckbox.Root.Props) {
  return (
    <BaseCheckbox.Root className={styles.checkbox} {...props}>
      <BaseCheckbox.Indicator
        className={styles.indicator}
        keepMounted
        render={(indicatorProps, state) => (
          <span {...indicatorProps}>
            {state.indeterminate ? <Line /> : <Check />}
          </span>
        )}
      />
    </BaseCheckbox.Root>
  );
}

export function CheckboxGroup(props: BaseCheckboxGroup.Props) {
  const { children, ...rest } = props;
  return (
    <BaseCheckboxGroup className={styles.checkboxGroup} {...rest}>
      {children}
    </BaseCheckboxGroup>
  );
}

function Check(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="15px"
      viewBox="0 -960 960 960"
      width="15px"
      focusable={false}
      aria-hidden
      {...props}
    >
      <path d="M382-200 113-469l97-97 172 173 369-369 97 96-466 466Z" />
    </svg>
  );
}

function Line(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="14"
      viewBox="0 0 24 24"
      {...props}
    >
      <line
        x1="3"
        y1="13"
        x2="21"
        y2="13"
        stroke="currentColor"
        strokeWidth={4}
        strokeLinecap="round"
      />
    </svg>
  );
}
