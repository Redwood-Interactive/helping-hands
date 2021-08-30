import axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button, ModalDialog, ModalHeader, ModalTitle, ModalBody, ModalFooter, Form } from 'react-bootstrap'
import { FormContainer, UpperHalf, LeftSide, RightSide, LowerHalf } from '../Contributions/Styles/AddItemModal.style.js';

const AddItemModal = (props) => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [condition, setCondition] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')

  const submitItem = () => {
    let form = {
      title: title,
      category: category,
      condition: condition,
      location: location,
      description: description,

    }
    axios.post('something', form)
         .then((res) => {
           console.log(res)
         })
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
                  <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" maxLength='20' placeholder="Enter title" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Select onChange={(e) => setCategory(e.target.value)} aria-label="Default select example">
                    <option value="" hidden>Category</option>
                    <option value="Food">Food</option>
                    <option value="Beverage">Drink</option>
                    <option value="Fur">Clothing</option>
                    <option value="Service">Service</option>
                    <option value="Furniture">Furniture</option>
                    <option value='Electronic'>Electronic</option>
                    <option value='Toy'>Toy</option>
                    <option value='Miscellaneous'>Miscellaneous</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Condition</Form.Label>
                  <Form.Select onChange={(e) => setCondition(e.target.value)} aria-label="Default select example">
                    <option value="" hidden>Condition</option>
                    <option value="New">New</option>
                    <option value="Awesome">Like Used</option>
                    <option value="GREAT">Used</option>
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
          <Button variant="primary" type="submit" style={{float: 'right'}} onClick={submitItem}>
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