import React, { useState, useContext } from 'react';
import { Modal, Button, ModalDialog, ModalHeader, ModalTitle, ModalBody, ModalFooter, Form } from 'react-bootstrap'
import { NotLoggedInContainer, ClickGoogle, AlertText, ClickBtn, GoogleSvg } from './Styles/LoginPage.style';

const LocationPage = (props) => {




  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <NotLoggedInContainer >

        <ClickGoogle onClick={() => { window.location = '/settings' }}>
          <ClickBtn>
         </ClickBtn>
         <AlertText>Please fill out location data</AlertText>
        </ClickGoogle>



      </NotLoggedInContainer>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}
export default LocationPage
