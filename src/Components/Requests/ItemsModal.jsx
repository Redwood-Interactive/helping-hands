import React, { useState } from 'react';
import { Modal, Button, ModalDialog, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap';
import ItemsModalCarousel from './ItemsModalCarousel.jsx';
import ItemsDetail from './ItemsDetail.jsx';



const ItemsModal = (props) => {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      <Modal.Body>
        {/* <ItemsModalCarousel clickedimages={props.clickedimages}/> */}
        <ItemsDetail title={props.title} description={props.description} category={props.category} location={props.location} iconclass={props.iconclass} condition={props.condition} userinfo={props.userinfo}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default ItemsModal