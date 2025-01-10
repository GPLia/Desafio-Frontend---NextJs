import { useState } from "react";

interface openSideBarProps {
  isOpen: boolean;
  handleToogle: () => void;
}

export function useOpenSideBar(): openSideBarProps {
  const [isOpen, setIsOpen] = useState(false);

  const handleToogle = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    handleToogle,
  };
}
