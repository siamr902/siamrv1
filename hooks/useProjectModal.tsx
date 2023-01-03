import { useEffect, useRef } from "react";
import { useModalCursor } from "../contexts/ModalCursorContext";

export const useProjectModal = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { closeModal, projectRef } = useModalCursor();

  useEffect(() => {
    const handleClose = (e: Event) => {
      if (!modalRef.current) return;
      if (
        !modalRef.current.contains(e.target as HTMLElement) &&
        !projectRef?.current?.contains(e.target as HTMLElement)
      ) {
        closeModal();
      }
    };

    window.addEventListener("click", handleClose);

    return () => window.removeEventListener("click", handleClose);
  }, []);

  return {
    modalRef,
  };
};
