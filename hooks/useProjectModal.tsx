import { useEffect, useRef } from "react";
import { useModal } from "../contexts/ModalContext";

export const useProjectModal = () => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { closeModal, projectRef } = useModal();

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
