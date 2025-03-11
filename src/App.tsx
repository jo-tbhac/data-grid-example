import { BrowserRouter, Routes, Route } from 'react-router'
import { AgGridPage } from '@/components/AgGrid'
import { HandsontablePage } from '@/components/Handsontable'
import { MuiDataGridPage } from '@/components/MuiDataGrid'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ag-grid" element={<AgGridPage />} />
        <Route path="/handsontable" element={<HandsontablePage />} />
        <Route path="/mui-data-grid" element={<MuiDataGridPage />} />
      </Routes>
    </BrowserRouter>
  )
}
