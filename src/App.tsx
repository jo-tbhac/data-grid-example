import { BrowserRouter, Routes, Route, Outlet } from 'react-router'
import { AgGridPage } from '@/components/AgGrid'
import { HandsontablePage } from '@/components/Handsontable'
import { MuiDataGridPage } from '@/components/MuiDataGrid'
import { PageLayout } from '@/components/layouts/PageLayout'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/ag-grid" element={<AgGridPage />} />
          <Route path="/handsontable" element={<HandsontablePage />} />
          <Route path="/mui-data-grid" element={<MuiDataGridPage />} />
          <Route path="/" element={<Outlet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
