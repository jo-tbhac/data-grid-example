import { FC, ReactNode } from 'react'
import { Stack } from '@mui/material'

interface Props {
  children: ReactNode
}

export const PageContainer: FC<Props> = ({ children }) => {
  return <Stack sx={{ flex: 1, py: 3, px: 3 }}>{children}</Stack>
}
