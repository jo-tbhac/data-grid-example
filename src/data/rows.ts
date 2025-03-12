import { columns1, columns2 } from './columns'

export const rows1 = [...new Array(10 * 1000)].map((_, i) => {
  const item: { [key: string]: string } = {}
  columns1.forEach(({ data, title }) => {
    item[data] = `${i}:${title}`
  })
  return item
})

export const rows2 = [...new Array(10 * 1000)].map((_, i) => {
  const item: { [key: string]: string } = {}
  columns2.forEach(({ field }) => {
    item[field] = `${i}:${field}`
  })
  return item
})
