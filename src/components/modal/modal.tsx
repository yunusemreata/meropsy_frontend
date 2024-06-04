// components/Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean; // boolean türünde isOpen prop'u
  onClose: () => void; // hiçbir parametre almayan ve geriye değer döndürmeyen bir fonksiyon
  children: React.ReactNode; // React çocuk elemanlarını kabul eden children prop'u
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded shadow-lg">
        {children}
        <button onClick={onClose} className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300">Kapat</button>
      </div>
    </div>
  );
};

export default Modal;
