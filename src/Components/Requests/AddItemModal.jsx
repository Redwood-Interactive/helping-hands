import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal, Button, ModalDialog, ModalHeader, ModalTitle, ModalBody, ModalFooter, Form } from 'react-bootstrap';
import { FormContainer, UpperHalf, LeftSide, RightSide, LowerHalf, MidHalf, MainAddress, City, State, ZipCode, TitleContainer, CheckDiv, Title } from '../Contributions/Styles/AddItemModal.style.js';

const AddItemModal = (props) => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [condition, setCondition] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')

  const submitItem = (e) => {
    e.preventDefault()
    let form = {
      user_id: props.userInfo.id,
      title: title,
      category: category,
      r_description: description,
    }
    axios.post('/requestsAll', form)
      .then((res) => {
        props.setAddItemModal(false)
        window.open('/requests', '_self');
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
        <FormContainer>
          <Form>
            <UpperHalf>
              <LeftSide>
                <TitleContainer>
                  <Title>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                      <Form.Label>Title</Form.Label>
                      <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" maxLength='20' placeholder="Enter title" required/>
                    </Form.Group>
                  </Title>
                </TitleContainer>

                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Select onChange={(e) => setCategory(e.target.value)} required aria-label="Default select example">
                    <option value="" hidden>Category</option>
                    <option value="Food">Food</option>
                    <option value="Drink">Drink</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Service">Service</option>
                    <option value="Furniture">Furniture</option>
                    <option value='Electronic'>Electronic</option>
                    <option value='Toy'>Toy</option>
                    <option value='Miscellaneous'>Miscellaneous</option>
                  </Form.Select>
                </Form.Group>


                </LeftSide>
                </UpperHalf>

                <MidHalf>
                  <MainAddress>
                    <Form.Group className="mb-3" controlId="MainAddress">
                      <Form.Label>Main Address</Form.Label>
                      <Form.Control type="text" defaultValue={props.userInfo.locations[0].street_name} disabled />
                    </Form.Group>
                  </MainAddress>

                  <City>
                    <Form.Group className="mb-3" controlId="City">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" defaultValue={props.userInfo.locations[0].city} disabled />
                    </Form.Group>
                  </City>

                  <State>
                    <Form.Group className="mb-3" controlId="State">
                      <Form.Label>State</Form.Label>
                      <Form.Control type="text" defaultValue={props.userInfo.locations[0].state} disabled />
                    </Form.Group>
                  </State>

                  <ZipCode>
                    <Form.Group className="mb-3" controlId="ZipCode">
                      <Form.Label>Zip Code</Form.Label>
                      <Form.Control type="text" defaultValue={props.userInfo.locations[0].zipcode} disabled />
                    </Form.Group>
                  </ZipCode>
                </MidHalf>





            <LowerHalf>
              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" type="Description" required placeholder="Description" style={{ height: '100px' }} />
              </Form.Group>

            </LowerHalf>
            <Button variant="primary" type="submit" style={{ float: 'right' }} onClick={submitItem}>
              Submit
            </Button>
            <Button onClick={props.onHide}>Close</Button>
          </Form>
        </FormContainer>

      </Modal.Body>


    </Modal>
  );
}

export default AddItemModal