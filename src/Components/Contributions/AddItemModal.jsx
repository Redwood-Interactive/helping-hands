import axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button, ModalDialog, ModalHeader, ModalTitle, ModalBody, ModalFooter, Form } from 'react-bootstrap'
import { FormContainer, UpperHalf, LeftSide, RightSide, LowerHalf, MidHalf, MainAddress, City, State, ZipCode, TitleContainer, CheckDiv, Title } from '../Contributions/Styles/AddItemModal.style.js';
import apiCalls from '../../apiCalls.js';
import { presetName, cloudName } from '../../../config.js';

const AddItemModal = (props) => {
  console.log(props.userInfo)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [condition, setCondition] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [free, setFree] = useState(false);
  const [image, setImage] = useState('');

  const [imageLocation, setLocalImageLocation] = useState('');
  const [newImageUrl, setnewImageUrl] = useState('');


  const submitContribution = (e) => {
    e.preventDefault()

    console.log(imageLocation)

    const formData = new FormData();
    formData.append('file', imageLocation);
    formData.append('upload_preset', presetName.presetName);

    axios.post(`https://api.cloudinary.com/v1_1/${cloudName.cloudName}/image/upload`, formData)
      .then((response) => {
        console.log('response after post to cloudinary', response.data.url)
        setnewImageUrl(response.data.url)

        let form = {
          user_id: props.userInfo.id,
          title: title,
          c_description: description,
          category: category,
          condition: condition,
          for_free: free,
          image: newImageUrl ? newImageUrl : 'https://res.cloudinary.com/jpbust/image/upload/v1630447070/ypakj1nr5ft7ryfrezf0.png'
        }

        axios.post('/getcontributions', form)
          .then((response) => {
            console.log('got a res when posting an img to DB', response);
          })
          .catch((err) => {
            console.log('there was an err :(', err);
          })
      })
      .catch((error) => { console.log('received an error', error) })
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
                      <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" maxLength='20' placeholder="Enter title" required />
                    </Form.Group>
                  </Title>
                  <CheckDiv>
                    <Form.Check type="checkbox" id="autoSizingCheck2" label="For Free?" onChange={() => setFree(!free)} checked />
                  </CheckDiv>
                </TitleContainer>

                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Select onChange={(e) => setCategory(e.target.value)} aria-label="Default select example" required>
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

                <Form.Group className="mb-3">
                  <Form.Label>Condition</Form.Label>
                  <Form.Select onChange={(e) => setCondition(e.target.value)} aria-label="Default select example" required>
                    <option value="" hidden>Condition</option>
                    <option value="New">New</option>
                    <option value="Awesome">Like New</option>
                    <option value="GREAT">Used</option>
                  </Form.Select>
                </Form.Group>

              </LeftSide>
              <RightSide>
                <Form.Group controlId="formFileLg" className="mb-3">
                  <Form.Label>Upload your images here</Form.Label>
                  <Form.Control type="file" size="sm" onChange={(e) => { setLocalImageLocation(e.target.files[0]) }} />
                </Form.Group>

              </RightSide>
            </UpperHalf>

            <MidHalf>
              <MainAddress>
                <Form.Group className="mb-3" controlId="MainAddress">
                  <Form.Label>Main Address</Form.Label>
                  <Form.Control type="text" defaultValue={props.userInfo.locations.street_name} />
                </Form.Group>
              </MainAddress>
              <City>
                <Form.Group className="mb-3" controlId="City">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" defaultValue={props.userInfo.locations.city} />
                </Form.Group>
              </City>
              <State>
                <Form.Group className="mb-3" controlId="State">
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" defaultValue={props.userInfo.locations.state} />
                </Form.Group>
              </State>

              <ZipCode>
                <Form.Group className="mb-3" controlId="ZipCode">
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control type="text" defaultValue={props.userInfo.locations.zipcode} />
                </Form.Group>
              </ZipCode>
            </MidHalf>

            <LowerHalf>
              <Form.Group className="mb-3" controlId="Description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" type="Description" placeholder="Description" style={{ height: '100px' }} required onChange={(e) => setDescription(e.target.value)} />
              </Form.Group>
            </LowerHalf>

            <Button variant="primary" type="submit" style={{ float: 'right' }} onClick={submitContribution}>
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