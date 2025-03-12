import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'
import { AG_GRID_LOCALE_JP } from '@ag-grid-community/locale'
import { AgGridReact } from 'ag-grid-react'

import { PageContainer } from '@/components/ui/PageContainer'
import { rows2, columns2 } from '@/data'

ModuleRegistry.registerModules([AllCommunityModule])

export const AgGridPage: FC = () => {
  const defaultColDef = { editable: true }

  return (
    <PageContainer>
      <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
        <Typography variant="body2">
          columns: {columns2.length.toLocaleString('ja-JP')}件
        </Typography>
        <Typography variant="body2">rows: {rows2.length.toLocaleString('ja-JP')}件</Typography>
      </Stack>
      <Box
        sx={{
          flex: 1,
        }}
      >
        <AgGridReact
          rowData={rows2}
          columnDefs={columns2}
          defaultColDef={defaultColDef}
          localeText={AG_GRID_LOCALE_JP}
          pagination
          singleClickEdit
          undoRedoCellEditing
          undoRedoCellEditingLimit={20}
        />
      </Box>
    </PageContainer>
  )
}
