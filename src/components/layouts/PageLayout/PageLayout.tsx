import { FC } from 'react'
import { Stack } from '@mui/material'
import { Outlet } from 'react-router'
import { Sidebar } from '@/components/ui/Sidebar'

export const PageLayout: FC = () => {
  return (
    <Stack direction="row" sx={{ height: '100vh', width: '100%' }}>
      <Sidebar />
      <Stack sx={{ flex: 1 }}>
        <Outlet />
      </Stack>
    </Stack>
  )
}
