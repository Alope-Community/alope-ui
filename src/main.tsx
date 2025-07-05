import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AccordionPage, AlertPage, BadgePage, BreadcrumbPage, ButtonPage } from './pages'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/badge" element={<BadgePage />} />
        <Route path="/accordion" element={<AccordionPage />} />
        <Route path="/alert" element={<AlertPage />} />
        <Route path="/Breadcrumb" element={<BreadcrumbPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
