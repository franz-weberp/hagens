import type { Text } from '@interfaces/text'
import type { HighlightItem, HighlightArray } from '@interfaces/highlight'

import { blueprint as iconBlueprint } from '@assets/icons/blueprint'
import { summary as iconSummary } from '@assets/icons/summary'
import { compass as iconCompass } from '@assets/icons/compass'
import { volleyball as iconVolleyball } from '@assets/icons/volleyball'

export const contentEnterprise:Text = {
  title: `Título Opt 1`,
  subtitle: `The standard chunk of Lorem Ipsum used since the 1500s.`,
  paragraphs: [
    `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.`,
    `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`
  ]
}

const highlightBlueprint:HighlightItem = {
  icon: iconBlueprint,
  title: `Lotes a partir de 000 m?`,
  description: `Residenciais e comerciais`
}

const highlightSummary:HighlightItem = {
  icon: iconSummary,
  title: `Lorem Ipsum e Lorem Ipsum`,
}

const highlightCompass:HighlightItem = {
  icon: iconCompass,
  title: `Finibus Bonorum et Malorum`,
}

const highlightEntreneniment:HighlightItem = {
  icon: iconVolleyball,
  title: `Finibus Bonorum et Malorum`,
}

export const contentEnterpriseCarousel:Text = {
  title: `LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING.`,
}

export const contentEnterpriseHighlight: HighlightArray = [
  highlightBlueprint,
  highlightSummary,
  highlightCompass,
  highlightEntreneniment,
]