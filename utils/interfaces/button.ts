import type { Icon } from '@interfaces/icon'

export interface Button {
  icon?: Icon,
  text: string,
  link: string,
  target: string,
  description: string
}