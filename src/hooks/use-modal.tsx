import { useState, useEffect } from 'react';

export interface IUseModal {
  isOpen: boolean;
  setModalOpen: (setOpen: boolean) => void;
  toggle: () => void;
  data: any;
  setData: (newData: any) => void;
}
export const useModal = (initialMode = false): IUseModal => {
  const [isOpen, setModalOpen] = useState<boolean>(initialMode);
  const [data, setData] = useState<any>();
  const toggle = () => setModalOpen(!isOpen);

  useEffect(() => {
    if (!!isOpen) {
      document.body.style.position = 'fixed';
    } else {
      document.body.style.position = '';
    }
  }, [isOpen]);

  return { isOpen, data, setData, setModalOpen, toggle };
};
