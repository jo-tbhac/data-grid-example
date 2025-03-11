import { columns1 } from './columns1'

export const rows1 = [...new Array(1 * 1000)].map((_, i) => {
  const item: { [key: string]: string } = {}
  columns1.forEach(({ data, title }) => {
    item[data] = `${i}:${title}`
  })
  return item
})
