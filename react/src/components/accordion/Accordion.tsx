import { Accordion as BaseAccordion } from "@base-ui-components/react";
import style from "./Accordion.module.css";

export function Accordion(props: BaseAccordion.Root.Props) {
  return <BaseAccordion.Root className={style.accordion} {...props} />;
}

export function AccordionItem(props: BaseAccordion.Item.Props) {
  return <BaseAccordion.Item className={style.accordionItem} {...props} />;
}

export function AccordionTrigger({
  children,
  ...props
}: BaseAccordion.Trigger.Props) {
  return (
    <BaseAccordion.Header className={style.accordionTriggerHeader}>
      <BaseAccordion.Trigger className={style.accordionTrigger} {...props}>
        {children}
        <ChevronIcon />
      </BaseAccordion.Trigger>
    </BaseAccordion.Header>
  );
}

export function AccordionPanel({
  children,
  ...props
}: BaseAccordion.Panel.Props) {
  return (
    <BaseAccordion.Panel className={style.accordionPanel} {...props}>
      <div className={style.accordionInner}>{children}</div>
    </BaseAccordion.Panel>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" className={style.chevronIcon} aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
