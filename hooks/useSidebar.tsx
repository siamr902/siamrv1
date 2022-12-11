import { useEffect, useRef, useState } from "react";

export const useSidebar = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClose = (e: Event) => {
      if (!menuRef.current) return;
      if (
        !menuRef.current.contains(e.target as HTMLElement) &&
        !hamburgerRef.current?.contains(e.target as HTMLElement)
      ) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("click", handleClose);
    setMounted(true);

    return () => window.removeEventListener("click", handleClose);
  }, []);

  return {
    menuRef,
    hamburgerRef,
    mounted,
    menuOpen,
    setMenuOpen
  }
  
}