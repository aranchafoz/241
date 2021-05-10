import React from 'react';
import { ModalContainer } from './modal.styled';
import { Close } from 'styled-icons/material';
import useKeyListener, { KEY_NUMBER } from '../../hooks/use-key-listener';

export interface IModalProps {
  isActive: boolean;
  onAccept?: (e?: any) => void;
  onClose: () => void;

}

const Modal: React.FC<IModalProps> = (props) => {
  const ref: React.RefObject<any> = React.createRef();

  useKeyListener(KEY_NUMBER.escape, () => props.onClose());

  return (
    <ModalContainer className={`${!props.isActive ? 'closed' : ''}`}>
      <div {...{ ref }} id="modal" className={`modal normal`}>
        <Close className="modal-close" onClick={props.onClose} />
        {props.children}
      </div>
      <div id="modal-overlay" className="modal-overlay" />
    </ModalContainer>
  );
};

export default Modal;
