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
      <div className="modal modal-open">
        <div className="modal-box w-full max-w-4xl min-w-[80vw] h-[80vh] min-h-[80vh] bg-[#e2e6ee]">
          <h2 className="font-bold text-base">{title}</h2>

          <div className="modal-action text-[12px]">{children}</div>
        </div>
        <button
          className="text-white btn bg-customBlue hover:bg-black absolute top-3 right-8 border-0"
          onClick={onClose}
        >
          <PiXBold />
        </button>
      </div>
    )
  );
}
