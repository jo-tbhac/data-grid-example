import { columns1, columns2, columns3 } from './columns'

export const rows1 = [...new Array(1 * 1000)].map((_, i) => {
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

export const rows3 = [...new Array(10 * 1000)].map((_, i) => {
  const item: { [key: string]: string } = {}
  columns3.forEach(({ field }) => {
    item.id = `${i}:${field}`
    item[field] = `${i}:${field}`
  })
  return item
})
