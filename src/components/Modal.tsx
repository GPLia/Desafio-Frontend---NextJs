interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode; // This is a type that represents any valid JSX
  title?: string;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    isOpen && (
      <div className="modal modal-open bg-[#e2e6ee]">
        <div className="modal-box max-w-full">
          <h2 className="font-bold text-lg">{title}</h2>

          <div className="modal-action">{children}</div>
        </div>
        <button
          className="btn bg-customBlue absolute top-3 right-8 border-0"
          onClick={onClose}
        >
          X
        </button>
      </div>
    )
  );
}
