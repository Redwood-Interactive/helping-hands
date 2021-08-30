import React, { useState } from 'react';
import { Modal, Button, ModalDialog, ModalHeader, ModalTitle, ModalBody, ModalFooter, Form } from 'react-bootstrap'
import { FormContainer, UpperHalf, LeftSide, RightSide, LowerHalf } from './Styles/AddItemModal.style.js';

const AddItemModal = (props) => {


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
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCategory">
                  <Form.Label>Category</Form.Label>
                  <Form.Control type="Category" placeholder="Category" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCondition">
                  <Form.Label>Condition</Form.Label>
                  <Form.Control type="Condition" placeholder="Condition" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLocation">
                  <Form.Label>Location</Form.Label>
                  <Form.Control type="Location" placeholder="Location" />
                </Form.Group>


              </LeftSide>
              <RightSide>
                <Form.Group controlId="formFileLg" className="mb-3">
                  <Form.Label>Upload your images here</Form.Label>
                  <Form.Control type="file" size="lg" />
                </Form.Group>

              </RightSide>
            </UpperHalf>
            <LowerHalf>
              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" type="Description" placeholder="Description" style={{ height: '100px'}}/>
              </Form.Group>

            </LowerHalf>
          </FormContainer>
          <Button variant="primary" type="submit">
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