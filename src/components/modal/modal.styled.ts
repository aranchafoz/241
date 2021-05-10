import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: relative;
  
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1010;

    background: #fff;
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    max-height: 100%;
    margin-left: auto;
    margin-right: auto;
    overflow: auto;
    max-width: 98%;
    width: 100%;

    svg.modal-close {
      position: absolute;
      top: 2.2rem;
      right: 2rem;
      z-index: 99;
      width: 2.4rem;
      height: 2.4rem;
      cursor: pointer;
      color: #fff;
      filter: drop-shadow( 2px 2px 1px rgba(0, 0, 0, .7));
    }
  }

  .modal-overlay {

    /* recommendation:
      don't focus on the number "1000" here, but rather,
      you should have a documented system for z-index and 
      follow that system. This number should be pretty
      high on the scale in that system.
    */
    z-index: 1000;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: #000000cc;
  }

  &.closed {
    display: none;
  }

  /* TABLET & MOBILE */
  @media (max-width: 768px) {
    .modal {
      max-width: calc(100vw - 1.6rem);

      &.large, &.xlarge {
        width: calc(100vw - 1.6rem);
      }
    }
  }

  /* LOW HEIGHT */
  @media screen and (max-height: 768px) {
    .modal {
      max-height: calc(100vh - 1.6rem);
    }
  }
`;