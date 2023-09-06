import { Backdrop, CloseBtn, CloseIcon, ModalWrapper } from "./Modal.styled"
import closeIcon from "../../assets/icons.svg"
import { useEffect } from "react"
import { createPortal } from "react-dom";

interface Props {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const modalRoot = document.getElementById("modal-root") as HTMLElement;

const Modal = ({ isOpen, onClose, children }: Props) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const closeOnEsc = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", closeOnEsc);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", closeOnEsc);
    };
  }, [isOpen, onClose]);

  const closeOnBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isOpen && e.target === e.currentTarget) {
      onClose();
    }
  };

  const closeOnBtn = () => {
    onClose();
  };

  if (!isOpen) return null;

  return createPortal(
    <Backdrop onClick={closeOnBackdrop}>
      <ModalWrapper>
        <CloseBtn aria-label="Close modal window" onClick={closeOnBtn}>
          <CloseIcon height={24} width={24}>
            <use href={closeIcon + "#icon-close"}></use>
          </CloseIcon>
        </CloseBtn>
        {children}
      </ModalWrapper>
    </Backdrop>,
    modalRoot
  )
}

export default Modal
