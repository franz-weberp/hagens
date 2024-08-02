export function formatPrice(value: number): string {
  const formatter = new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  return formatter.format(value)
}