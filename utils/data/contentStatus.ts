const statusMapping: { [key: number]: string } = {
  1: 'Em construção',
  2: 'Pronto para morar',
  3: '100% Vendido'
}

export const mapStatus = (statusCode: number): string => {
  return statusMapping[statusCode] || 'Unknown'
}
