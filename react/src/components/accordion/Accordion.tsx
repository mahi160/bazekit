import { Accordion as BaseAccordion } from '@base-ui-components/react'
import style from './Accordion.module.css'

export interface AccordionProps extends BaseAccordion.Root.Props { }
export interface AccordionItemProps extends BaseAccordion.Item.Props { }
export interface AccordionTriggerProps extends BaseAccordion.Trigger.Props { }
export interface AccordionPanelProps extends BaseAccordion.Panel.Props { }

export function Accordion(props: AccordionProps) {
  return <BaseAccordion.Root className={style.accordion} {...props} />
}

export function AccordionItem(props: AccordionItemProps) {
  return <BaseAccordion.Item className={style.accordionItem} {...props} />
}

export function AccordionTrigger({
  children,
  ...props
}: AccordionTriggerProps) {
  return (
    <BaseAccordion.Header className={style.accordionTriggerHeader}>
      <BaseAccordion.Trigger className={style.accordionTrigger} {...props}>
        {children}
        <ChevronIcon />
      </BaseAccordion.Trigger>
    </BaseAccordion.Header>
  )
}

export function AccordionPanel({
  children,
  ...props
}: AccordionPanelProps) {
  return (
    <BaseAccordion.Panel className={style.accordionPanel} {...props}>
      <div className={style.accordionInner}>{children}</div>
    </BaseAccordion.Panel>
  )
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" className={style.chevronIcon} aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}
