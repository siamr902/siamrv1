import {
  createContext,
  ReactNode,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type ProviderProps = {
  children: ReactNode;
};

type TrailProps = {
  x: number;
  y: number;
};

type ModalProps = {
  showModal: boolean;
  toggleModal: () => void;
  closeModal: () => void;
  projectRef: RefObject<HTMLDivElement>;
  trailPosition: TrailProps;
  click: boolean;
  cursorMount: boolean;
};
const ModalCursorContext = createContext({} as ModalProps);

export const useModalCursor = () => useContext(ModalCursorContext);

export const ModalCursorContextProvider = ({ children }: ProviderProps) => {
  const [trailPosition, setTrailPosition] = useState<TrailProps>({
    x: 0,
    y: 0,
  });
  const [click, setClick] = useState<boolean>(false);
  const [cursorMount, setCursorMount] = useState<boolean>(false);

  useEffect(() => {
    const track = (e: MouseEvent) => {
      if (!cursorMount) setCursorMount(true);
      setTrailPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", track);

    const handleClick = () => {
      setClick(true);
      setTimeout(() => setClick(false), 100);
    };
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", track);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const [showModal, setShowModal] = useState<boolean>(false);
  const projectRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => setShowModal((prev) => !prev);
  const closeModal = () => setShowModal(false);

  return (
    <ModalCursorContext.Provider
      value={{
        showModal,
        toggleModal,
        closeModal,
        projectRef,
        trailPosition,
        click,
        cursorMount,
      }}
    >
      {children}
    </ModalCursorContext.Provider>
  );
};
