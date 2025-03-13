export const columns1 = [...new Array(100)].map((_, i) => ({
  title: `col${i}`,
  data: `col${i}`,
  type: 'text',
}))

export const columns2 = [...new Array(100)].map((_, i) => ({
  field: `col${i}`,
  filter: true,
  floatingFilter: true,
}))

export const columns3 = [...new Array(100)].map((_, i) => ({
  field: `col${i}`,
  editable: true,
}))
