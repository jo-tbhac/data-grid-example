import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { HyperFormula } from 'hyperformula'
import { registerAllModules } from 'handsontable/registry'
import { HotTable } from '@handsontable/react-wrapper'
import { registerLanguageDictionary, jaJP } from 'handsontable/i18n'

import { PageContainer } from '@/components/ui/PageContainer'
import { rows1, columns1 } from '@/data'

import 'handsontable/styles/handsontable.min.css'
import 'handsontable/styles/ht-theme-main.min.css'

registerAllModules()
registerLanguageDictionary(jaJP)

export const HandsontablePage: FC = () => {
  const hyperformulaInstance = HyperFormula.buildEmpty({
    // to use an external HyperFormula instance,
    // initialize it with the `'internal-use-in-handsontable'` license key
    licenseKey: 'internal-use-in-handsontable',
  })

  return (
    <PageContainer>
      <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
        <Typography variant="body2">
          columns: {columns1.length.toLocaleString('ja-JP')}件
        </Typography>
        <Typography variant="body2">rows: {rows1.length.toLocaleString('ja-JP')}件</Typography>
      </Stack>
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
        }}
        className="ht-theme-main"
      >
        <HotTable
          data={rows1}
          rowHeaders={false}
          columns={columns1}
          autoWrapRow
          autoWrapCol
          height="100%"
          width="100%"
          contextMenu
          filters
          dropdownMenu
          language={jaJP.languageCode}
          locale="ja-JP"
          licenseKey="non-commercial-and-evaluation"
          formulas={{
            engine: hyperformulaInstance,
            sheetName: 'Sheet1',
          }}
        />
      </Box>
    </PageContainer>
  )
}
