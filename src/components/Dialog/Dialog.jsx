import React from 'react';
import { PropTypes } from 'prop-types';
import { Portal } from 'react-portal';
import { Modal, CloseButton } from 'react-bootstrap';

const Dialog = ({ title, children, handleClose }) => {
  return (
    <Portal>
      <Modal show={true} centered size='lg'>
        <Modal.Header>
          <Modal.Title>
            {title}
          </Modal.Title>
          <CloseButton onClick={handleClose} />
        </Modal.Header>
        <div>
          {children}
        </div>
      </Modal>
    </Portal>
  );
}

Dialog.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node).isRequired,
    PropTypes.node.isRequired
  ]).isRequired,
  handleClose: PropTypes.func.isRequired
};

export default Dialog;
