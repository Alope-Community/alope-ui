import React, { createContext, useContext, useState } from 'react';
import Toast, { ToastPositions, type ToastProps } from './Toast';

interface ToastMessage extends ToastProps {
  id: number
}

interface ToastContextType {
  addToast: ({ title, message, type, variant, icon, onClose }: ToastProps) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
};

interface ToastProviderProps {
  children: React.ReactNode
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  const addToast = ({ title, message, type, variant, icon, onClose, position = 'bottomRight' }: ToastProps) => {
    const id = Date.now()
    setToasts(prevToasts => [...prevToasts, { title, id, message, type, variant, icon, onClose, position }])
  }

  const removeToast = (id: number) => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
  }

  const positions = Object.keys(ToastPositions) as (keyof typeof ToastPositions)[];

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {positions.map((pos) => (
        <div key={pos} className={`fixed z-50 ${ToastPositions[pos]}`}>
          {toasts
            .filter((toast) => toast.position === pos)
            .map((toast) => (
              <Toast
                key={toast.id}
                title={toast.title}
                message={toast.message}
                type={toast.type}
                variant={toast.variant}
                icon={toast.icon}
                position={toast.position}
                onClose={() => removeToast(toast.id)}
              />
            ))}
        </div>
      ))}
    </ToastContext.Provider>
  );
};
