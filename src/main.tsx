import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Global } from '@emotion/react'
import globalStyles from '@/styles/global'
import theme from '@/styles/theme'
import { App } from './App'

import '@fontsource-variable/noto-sans-jp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    <Global styles={globalStyles} />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
