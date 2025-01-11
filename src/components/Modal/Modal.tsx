import { PiXBold } from "react-icons/pi";

interface ModalProps {
  // é uma interface que define as propriedades que o componente Modal aceita
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode; // This is a type that represents any valid JSX
  title?: string;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  // Função que retorna o componente Modal
  if (!isOpen) return null;

  return (
    // Retorna o componente Modal
    isOpen && (
      <div className="modal modal-open bg-[#e2e6ee]">
        <div className="modal-box max-w-full">
          <h2 className="font-bold text-lg">{title}</h2>

          <div className="modal-action">{children}</div>
        </div>
        <button
          className="text-white btn bg-customBlue absolute top-3 right-8 border-0"
          onClick={onClose}
        >
          <PiXBold />
        </button>
      </div>
    )
  );
}
