import type { Icon } from '@interfaces/icon'

export interface HighlightItem {
  icon: Icon;
  title: string;
  description?: string;
}

export type HighlightArray = HighlightItem[];
