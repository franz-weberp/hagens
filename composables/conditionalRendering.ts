export const conditionalRendering = () => {
  const hasContent = (prop: string): boolean => prop !== ''
  return { hasContent }
}
