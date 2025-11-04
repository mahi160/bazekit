import { Avatar as BaseAvatar } from '@base-ui-components/react'
import styles from './Avatar.module.css'

export function Avatar({ className, children, ...props }: BaseAvatar.Root.Props) {
  return (
    <BaseAvatar.Root
      className={`${styles.avatar} ${className}`}
      {...props}
    >
      {children}
    </BaseAvatar.Root>
  )
}

export function AvatarImage({ className, src, alt, ...props }: BaseAvatar.Image.Props) {
  return (
    <BaseAvatar.Image
      className={`${styles.avatarImage} ${className || ''}`}
      src={src}
      alt={alt}
      {...props}
    />
  )
}

export function AvatarFallback({ className, children, ...props }: BaseAvatar.Fallback.Props) {
  return (
    <BaseAvatar.Fallback
      className={`${styles.avatarFallback} ${className || ''}`}
      {...props}
    >
      {children}
    </BaseAvatar.Fallback>
  )
}

export function AvatarGroup({ children, ...rest }: React.BaseHTMLAttributes<HTMLDivElement>) {
  return (
    <div className={styles.avatarGroup} {...rest}>
      {children}
    </div>
  )
}
