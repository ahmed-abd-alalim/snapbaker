import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// import glopal context
import { GlopalProvider } from '@/assets/context'

import App from './App'
import './main.css'

createRoot(document.getElementById('root')!).render(
  <GlopalProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </GlopalProvider>
)
