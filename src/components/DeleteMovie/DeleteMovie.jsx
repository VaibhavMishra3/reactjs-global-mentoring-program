import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

import Dialog from '../Dialog/Dialog';

const DeleteMovie = ({ handleClose, handleDelete }) => {
  const [visible, setVisible] = useState(null);

  return (
    <>
      <button onClick={() => setVisible(true)}>open delete movie dialog</button>

      {visible && (
        <Dialog
          title={'Delete movie'}
          handleClose={() => { handleClose(); setVisible(null); }}
        >
          <Container>
            <Row>
              <Col>
                <Modal.Body>
                  <p>Are you sure you want to delete this movie?</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='danger' onClick={() => { handleDelete(); setVisible(null); }}>
                    Confirm
                  </Button>
                </Modal.Footer>
              </Col>
            </Row>
          </Container>
        </Dialog>
      )}
    </>
  );
}

DeleteMovie.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default DeleteMovie;
