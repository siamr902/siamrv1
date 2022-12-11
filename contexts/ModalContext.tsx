import { createContext, ReactNode, RefObject, useContext, useRef, useState } from "react";

type ProviderProps = {
  children: ReactNode;
};

type ModalProps = {
  showModal: boolean;
  toggleModal: () => void;
  closeModal: () => void;
  projectRef: RefObject<HTMLDivElement>;
};
const ModalContext = createContext({} as ModalProps);

export const useModal = () => useContext(ModalContext);

export const ModalContextProvider = ({ children }: ProviderProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const projectRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => setShowModal((prev) => !prev);
  const closeModal = () => setShowModal(false);

  return (
    <ModalContext.Provider value={{ showModal, toggleModal, closeModal, projectRef }}>
      {children}
    </ModalContext.Provider>
  );
};