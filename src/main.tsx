import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AccordionPage, AlertPage, BadgePage, BreadcrumbPage, ButtonPage, CardPage, ModalPage, OffcanvasPage, ToastPage } from './pages'
import { ToastProvider } from './components/Toast/ToastProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/badge" element={<BadgePage />} />
          <Route path="/accordion" element={<AccordionPage />} />
          <Route path="/alert" element={<AlertPage />} />
          <Route path="/Breadcrumb" element={<BreadcrumbPage />} />
          <Route path="/card" element={<CardPage />} />
          <Route path="/modal" element={<ModalPage />} />
          <Route path="/offcanvas" element={<OffcanvasPage />} />
          <Route path="/toast" element={<ToastPage />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  </StrictMode>,
)
