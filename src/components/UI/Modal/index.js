import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styles from './style.module.css';

const Backdrop = (props) => {
  return <div className={styles.backdrop} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById('overlay');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement,
      )}
    </Fragment>
  );
};

export default Modal;