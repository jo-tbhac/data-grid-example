import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { DataGrid, jaJP } from '@mui/x-data-grid'

import { PageContainer } from '@/components/ui/PageContainer'
import { rows3, columns3 } from '@/data'

export const MuiDataGridPage: FC = () => {
  return (
    <PageContainer>
      <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
        <Typography variant="body2">
          columns: {columns3.length.toLocaleString('ja-JP')}件
        </Typography>
        <Typography variant="body2">rows: {rows3.length.toLocaleString('ja-JP')}件</Typography>
      </Stack>
      <Box
        sx={{
          flex: 1,
        }}
      >
        <DataGrid
          rows={rows3}
          columns={columns3}
          rowHeight={40}
          experimentalFeatures={{ newEditingApi: true }}
          localeText={jaJP.components.MuiDataGrid.defaultProps.localeText}
        />
      </Box>
    </PageContainer>
  )
}
