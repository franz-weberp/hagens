export const conditionalRendering = () => {
  const hasContent = (prop?: string): boolean => {
    return prop !== undefined && prop !== null && prop.trim() !== '';
  }

  return { hasContent }
}
