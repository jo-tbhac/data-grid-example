import { FC } from 'react'
import { Stack, Typography } from '@mui/material'
import { blueGrey, grey } from '@mui/material/colors'
import { NavLink } from 'react-router'

export const Sidebar: FC = () => {
  return (
    <Stack
      spacing={2}
      sx={{
        backgroundColor: blueGrey[50],
        height: '100%',
        px: 2,
        py: 3,
        width: 180,
        a: {
          textDecoration: 'none',
        },
      }}
    >
      <NavLink to="/ag-grid">
        {({ isActive }) => (
          <Typography variant="body1" sx={{ color: grey[800], fontWeight: isActive ? 600 : 400 }}>
            AG Grid
          </Typography>
        )}
      </NavLink>
      <NavLink to="/handsontable">
        {({ isActive }) => (
          <Typography variant="body1" sx={{ color: grey[800], fontWeight: isActive ? 600 : 400 }}>
            Handsontable
          </Typography>
        )}
      </NavLink>
      <NavLink to="/mui-data-grid">
        {({ isActive }) => (
          <Typography variant="body1" sx={{ color: grey[800], fontWeight: isActive ? 600 : 400 }}>
            MUI DataGrid
          </Typography>
        )}
      </NavLink>
    </Stack>
  )
}
