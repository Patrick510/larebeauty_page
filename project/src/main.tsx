import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage5 from '@/components/LandingPage5'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LandingPage5/>
  </StrictMode>,
)
