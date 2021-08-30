import React, { useState } from 'react';
import { Modal, Button, ModalDialog, ModalHeader, ModalTitle, ModalBody, ModalFooter, Form } from 'react-bootstrap'
import { FormContainer, UpperHalf, LeftSide, RightSide, LowerHalf } from './Styles/AddItemModal.style.js';

const AddItemModal = (props) => {

  const submitItem = () => {
    
  }


  return (

    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      <Modal.Body>

        <Form>
          <FormContainer>
            <UpperHalf>
              <LeftSide>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="title" placeholder="Enter title" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Select aria-label="Default select example">

                    <option value="" disabled selected>Category</option>
                    <option value="1">Food</option>
                    <option value="2">Beverage</option>
                    <option value="3">Fur</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>

                  <Form.Select aria-label="Default select example">
                    <Form.Label>Condition</Form.Label>
                    <option value="" disabled selected>Condition</option>
                    <option value="1">New</option>
                    <option value="2">Awesome</option>
                    <option value="3">GREAT</option>
                    <option value="4">meh</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLocation">
                  <Form.Label>Location</Form.Label>
                  <Form.Control type="Location" placeholder="Location" />
                </Form.Group>


              </LeftSide>
              <RightSide>
                <Form.Group controlId="formFileLg" className="mb-3">
                  <Form.Label>Upload your images here</Form.Label>
                  <Form.Control type="file" size="sm" />
                </Form.Group>

              </RightSide>
            </UpperHalf>
            <LowerHalf>
              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" type="Description" placeholder="Description" style={{ height: '100px' }} />
              </Form.Group>

            </LowerHalf>
          </FormContainer>
          <Button variant="primary" type="submit" style={{float: 'right'}}>
            Submit
          </Button>
        </Form>



      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>

    </Modal>
  );
}

export default AddItemModal