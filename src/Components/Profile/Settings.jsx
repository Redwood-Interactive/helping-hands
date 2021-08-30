import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link, useLocation, Redirect } from 'react-router-dom';

import { FormItem, FormRow, ImageItem, InputContainer, DropdownMenu, ImageRow, EmailItem, ProfileIcon } from './Styles/Settings.style.js'

const states = [
  "AK",
  "HI",
  "AL",
  "AR",
  "AZ",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "IA",
  "ID",
  "IL",
  "IN",
  "KS",
  "KY",
  "LA",
  "MA",
  "MD",
  "ME",
  "MI",
  "MN",
  "MO",
  "MS",
  "MT",
  "NC",
  "ND",
  "NE",
  "NH",
  "NJ",
  "NM",
  "NV",
  "NY",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VA",
  "VT",
  "WA",
  "WI",
  "WV",
  "WY"];


const Settings = ({userInfo, isLoggedIn}) => {
  // change zipcode positioning
  const [validated, setValidated] = useState(false);
  const [edit, setEdit] = useState(false);
  const location = useLocation()
  // const { user } = location.state;
  const user = userInfo;


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  const editCheck = () => {
    if (!edit) {
      return (
        <Button size='sm' style={{ "height": "40px" }} variant="secondary" onClick={() => { setEdit(true) }}>
          Edit
        </Button>
      )
    } else {
      return (
        <Button style={{ "height": "40px" }} variant="secondary" onClick={() => { setEdit(false) }}>
          X
        </Button>
      )
    }
  }
  const renderSettings = () => {
    return (
      <InputContainer>
        <ImageRow>
          <h1>User Settings</h1>
          <Link id='link' to='/profile'>
            <img style={{ "heigth": "50px", "width": "50px", "postion": "relative" }} src='https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/512x512/plain/id_badge.png'></img>
          </Link>
        </ImageRow>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <ImageRow>
            <Image
              style={{ "height": "100px", "width": "100px" }}
              src={user.profile_pic} roundedCircle />
            {editCheck()}
          </ImageRow>
          <FormItem>
            <Form.Label>Profile Pic</Form.Label>
            <Form.Control type="file" />
          </FormItem>
          <FormRow>
            <FormItem>
              <Form.Label>First Name</Form.Label>
              <Form.Control size='sm' defaultValue={user.first_name} required disabled={!edit} />
            </FormItem>
            <FormItem>
              <Form.Label>Last Name</Form.Label>
              <Form.Control size='sm' defaultValue={user.last_name} required disabled={!edit} />
            </FormItem>
          </FormRow>
          <EmailItem>
            <Form.Label>Email</Form.Label>
            <Form.Control size='sm' type="email" defaultValue={user.email} placeholder="Enter email" required disabled={!edit} />
          </EmailItem>
          <FormItem>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control size='sm' placeholder="(888) 123-4567" defaultValue={user.phone} required disabled={!edit} />
          </FormItem>
          <FormItem>
            <Form.Label>Address</Form.Label>
            <Form.Control size='sm' placeholder="1234 Main St" defaultValue={user.locations[0].street_name} required disabled={!edit} />
          </FormItem>
          <FormItem>
            <Form.Label>Address 2</Form.Label>
            <Form.Control size='sm' placeholder="Apartment, Studio, Floor" disabled={!edit} />
          </FormItem>
          <FormRow>
            <FormItem>
              <Form.Label>City</Form.Label>
              <Form.Control size='sm' defaultValue={user.locations[0].city} required disabled={!edit} />
            </FormItem>
            <FormItem>
              <Form.Label>State</Form.Label>
              <Dropdown>
                <Dropdown.Toggle size='sm' variant="outline-secondary" disabled={!edit}>
                  State
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ "height": "100px", "overflowY": "scroll" }}>
                  {states.map((state) => (
                    <Dropdown.Item value={state}>{state}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </FormItem>
            <FormItem>
              <Form.Label>Zipcode</Form.Label>
              <Form.Control size='sm' defaultValue={user.locations[0].zipcode} required disabled={!edit} />
            </FormItem>
          </FormRow>
          <FormItem>
            <Button style={{ "width": "20%" }} size='sm' variant="primary" type="submit">
              Submit
            </Button>
          </FormItem>
        </Form>
      </InputContainer>
    )
  }
  if (Object.keys(user).length === 0) {
    return null;
  } else {
  return (
    <React.Fragment>
      {renderSettings()}
    </React.Fragment>
  )
  }
};

export default Settings;
