import { useState } from 'react';
interface useModalBind {
  closeModal: () => void;
  openModal: () => void;
}

export function useModal(): [boolean, useModalBind] {
  const [isVisible, setIsVisible] = useState(false);
  const closeModal = () => {
    setIsVisible(false);
  };

  const openModal = () => {
    setIsVisible(true);
  };
  return [isVisible, { closeModal, openModal }];
}
