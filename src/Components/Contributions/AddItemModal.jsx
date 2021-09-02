import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal, Button, ModalDialog, ModalHeader, ModalTitle, ModalBody, ModalFooter, Form, FormControl, FormCheck, FloatingLabel } from 'react-bootstrap'
import { FormContainer, UpperHalf, LeftSide, RightSide, LowerHalf, MidHalf, MainAddress, City, State, ZipCode, TitleContainer, CheckDiv, Title } from '../Contributions/Styles/AddItemModal.style.js';
import apiCalls from '../../apiCalls.js';
import { presetName, cloudName } from '../../../config.js';

const AddItemModal = (props) => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [condition, setCondition] = useState('')
  const [streetName, setStreetName] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [description, setDescription] = useState('')
  const [free, setFree] = useState(true);
  const [imageLocation, setLocalImageLocation] = useState('');
  const [newImageUrl, setnewImageUrl] = useState('');
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if (props.userInfo.locations) {
      setStreetName(props.userInfo.locations[0].street_name);
      setCity(props.userInfo.locations[0].city);
      setState(props.userInfo.locations[0].state);
      setZipCode(props.userInfo.locations[0].zipcode);
    }
  }, [props.userInfo])

  const submitContribution = (e) => {
    e.preventDefault()
    const check = e.currentTarget;
    if (check.checkValidity() === false) {
      setValidated(false)
      e.stopPropagation();
    } else {
      const formData = new FormData();
      formData.append('file', imageLocation);
      formData.append('upload_preset', presetName.presetName);

      axios.post(`https://api.cloudinary.com/v1_1/${cloudName.cloudName}/image/upload`, formData)
        .then((response) => {
          return response.data.url
        })
        .catch((error) => { console.log('received an error', error) })
        .then((photo) => {
          let form = {
            user_id: props.userInfo.id,
            title: title,
            c_description: description,
            category: category,
            condition: condition,
            for_free: free,
            image: photo ? photo : 'https://res.cloudinary.com/jpbust/image/upload/v1630447070/ypakj1nr5ft7ryfrezf0.png'
          };
          return form;
        })
        .then((form) => {
          axios.post('/getcontributions', form)
            .then(() => {
              props.setAddItemModal(false)
              window.open('/contributions', '_self');
            })
            .catch((err) => {
              console.log('there was an err :(', err);
            })
        })
        .catch((err) => {
          console.log('there was an err :(', err);
        })
    }
    setValidated(true);
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
          <Form noValidate validated={validated} onSubmit={submitContribution}>

            <UpperHalf>
              <LeftSide>
                <TitleContainer>
                  <Title>
                    <Form.Group md="4" className="mb-3" controlId="formBasicTitle">
                      <Form.Label>Title</Form.Label>
                      <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" maxLength='20' placeholder="Enter title" required />
                      <Form.Control.Feedback type='invalid'>
                        Title required.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Title>
                  <CheckDiv>
                    <Form.Check type="checkbox" id="autoSizingCheck2" label="For Free?" onChange={(e) => setFree(!free)} defaultChecked='true'/>
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
                  <Form.Control.Feedback type='invalid'>
                    Category required.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Condition</Form.Label>
                  <Form.Select onChange={(e) => setCondition(e.target.value)} aria-label="Default select example" required>
                    <option value="" hidden>Condition</option>
                    <option value="New">New</option>
                    <option value="Like new">Like new</option>
                    <option value="Used">Used</option>
                  </Form.Select>
                  <Form.Control.Feedback type='invalid'>
                    Condition required.
                  </Form.Control.Feedback>
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
                  <Form.Control type="text" defaultValue={streetName} disabled />
                </Form.Group>

              </MainAddress>

              <City>
                <Form.Group className="mb-3" controlId="City">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" defaultValue={city} disabled />
                </Form.Group>
              </City>

              <State>
                <Form.Group className="mb-3" controlId="State">
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" defaultValue={state} disabled />
                </Form.Group>
              </State>

              <ZipCode>
                <Form.Group className="mb-3" controlId="ZipCode">
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control type="text" defaultValue={zipCode} disabled />
                </Form.Group>
              </ZipCode>
            </MidHalf>

            <LowerHalf>
              <Form.Group className="mb-3" controlId="Description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" type="Description" placeholder="Description" style={{ height: '100px' }} required onChange={(e) => setDescription(e.target.value)} />
              </Form.Group>
              <Form.Control.Feedback type='invalid'>
                Description required.
              </Form.Control.Feedback>
            </LowerHalf>

            <Button variant="primary" type="submit" style={{ float: 'right' }}>
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