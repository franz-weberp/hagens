import type { Text } from '@interfaces/text'
import type { Button } from '@interfaces/button'
import type { Location } from '@interfaces/location'

import { star as iconStar } from '@assets/icons/star'

export const contentLocation:Text = {
  title: `Lorem Ipsum is simply dummy text of the printing.`,
  subtitle: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
  paragraphs: [`There are many variations of passages of Lorem Ibsum available, but the majority have suffered alteration in some form.`]
}

export const contentButtonLocation:Button = {
  icon: iconStar,
  text: `Ir com Waze`,
  link: `https://google.com.br`,
  target: `_blank`,
  description: 'Botao ir com waze'
}

export const contentPlacesLocation:Location = {
  icon: [
    iconStar,
    iconStar,
    iconStar,
    iconStar
  ],
  places: [
    `Lorem Ipsum`,
    `Lorem Ipsum`,
    `Lorem Ipsum`,
    `Lorem Ipsum`
  ],
  distances: [
    `18,6 km`,
    `32,6 km`,
    `45 km`,
    `56,2 km`
  ],
}