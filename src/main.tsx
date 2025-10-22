import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AccordionPage, AlertPage, AvatarPage, BadgePage, BottomNavbarPage, BreadcrumbPage, ButtonPage, CardPage, CheckboxInputPage, CodeInputPage, CollectionPage, FABPage, FileUploadPage, GridPage, MasonryPage, ModalPage, OffcanvasPage, PaginationPage, RadioInputPage, SelectInputPage, SkeletonPage, SliderPage, SpinnerPage, TablePage, TabsPage, TextareaPage, TextInputPage, TimelinePage, ToastPage, TogglePage, TooltipPage } from './pages'
import { ToastProvider } from './components/Toast/ToastProvider'
import { ThemeProvider } from './context/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
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
            <Route path="/text-input" element={<TextInputPage />} />
            <Route path="/select-input" element={<SelectInputPage />} />
            <Route path="/radio-input" element={<RadioInputPage />} />
            <Route path="/checkbox-input" element={<CheckboxInputPage />} />
            <Route path="/pagination" element={<PaginationPage />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/tooltip" element={<TooltipPage />} />
            <Route path="/spinner" element={<SpinnerPage />} />
            <Route path="/skeleton" element={<SkeletonPage />} />
            <Route path="/toggle" element={<TogglePage />} />
            <Route path="/textarea" element={<TextareaPage />} />
            <Route path="/avatar" element={<AvatarPage />} />
            <Route path="/file-upload" element={<FileUploadPage />} />
            <Route path="/tabs" element={<TabsPage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/fab" element={<FABPage />} />
            <Route path="/bottom-navbar" element={<BottomNavbarPage />} />
            <Route path="/grid" element={<GridPage />} />
            <Route path="/masonry" element={<MasonryPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/slider" element={<SliderPage />} />
            <Route path="/code-input" element={<CodeInputPage />} />
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </ThemeProvider>
  </StrictMode>,
)
