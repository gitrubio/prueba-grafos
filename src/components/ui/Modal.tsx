import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } `}
    >
      <div className="relative  p-6 bg-[#c6c6c6]  border-4 border-black rounded-xl shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-400 hover:text-gray-800"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}
