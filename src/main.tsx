import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

import '@fontsource-variable/noto-sans-jp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
