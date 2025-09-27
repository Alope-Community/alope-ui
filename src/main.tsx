import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext"; // ⬅️ tambahin ini
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);




 {/*
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AccordionPage, AlertPage, BadgePage, BreadcrumbPage, ButtonPage, CardPage, CheckboxInputPage, ModalPage, OffcanvasPage, RadioInputPage, SelectInputPage, TextInputPage, ToastPage } from './pages'
import { ToastProvider } from './components/Toast/ToastProvider'
import HomePage from './pages/HomePage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/app" element={<App />} />
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
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  </StrictMode>,
)
*/}
