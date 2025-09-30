import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Modal({ isOpen, onClose, children, className }: ModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-start sm:items-start justify-center bg-black/40 backdrop-blur-sm p-2 sm:p-6 overflow-auto"
      onClick={onClose}
    >
    <div
      className={`
        bg-white dark:bg-gray-800 rounded-lg shadow-lg 
        w-full sm:max-w-lg sm:w-full h-full max-h-[100vh] sm:h-auto
        mt-0 sm:mt-20 p-4 sm:p-6
        ${className ?? ""}
      `}
      onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
