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

import { FormItem, FormRow, ImageItem, InputContainer, DropdownMenu, ImageRow, ProfileIcon, AddrRow, SettingRow, SmallRow} from './Styles/Settings.style.js'

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


const Settings = ({ userInfo, isLoggedIn }) => {
  // change zipcode positioning
  const user = userInfo;
  const [validated, setValidated] = useState(false);
  const [edit, setEdit] = useState(false);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState (user.phone);
  const [streetName, setStreetName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  // const { user } = location.state;

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    setValidated(true);
  };

  const submitCheck = () => {
    if (!edit) {
      return (<FormItem>
            <Button style={{ "width": "25%" }} size='sm' variant="primary" type="submit">
              Submit
            </Button>
          </FormItem>)
    }
  }
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
        <SettingRow>
          <h1>User Settings</h1>
          <Link id='link' to='/profile'>
            <img style={{ "heigth": "50px", "width": "50px", "postion": "relative" }} src='https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/512x512/plain/id_badge.png'></img>
          </Link>
        </SettingRow>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <ImageRow>
            <Image
              style={{ "height": "100px", "width": "100px" }}
              src={user.profile_pic} roundedCircle />
            {editCheck()}
          </ImageRow>
          <FormRow>
            <FormItem>
              <Form.Label>First Name</Form.Label>
              <Form.Control size='sm' defaultValue={user.first_name} required disabled={!edit} onChange={(e) => setFirstName(e.target.value)}/>
            </FormItem>
            <FormItem>
              <Form.Label>Last Name</Form.Label>
              <Form.Control size='sm' defaultValue={user.last_name} required disabled={!edit} />
            </FormItem>
          </FormRow>
          <FormRow>
            <FormItem>
              <Form.Label>Email</Form.Label>
              <Form.Control size='sm' type="email" defaultValue={user.email} placeholder="Enter email" required disabled={!edit} />
            </FormItem>
            <FormItem>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control size='sm' placeholder="(888) 123-4567" defaultValue={user.phone} required disabled={!edit} />
            </FormItem>
          </FormRow>
          <AddrRow>
            <FormItem>
              <Form.Label>Address</Form.Label>
              <Form.Control size='sm' placeholder="1234 Main St" defaultValue={user.locations[0].street_name} required disabled={!edit} />
            </FormItem>
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
                <Dropdown.Menu style={{ "height": "140px", "overflowY": "scroll" }}>
                  {states.map((state) => (
                    <Dropdown.Item value={state}>{state}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </FormItem>
          </AddrRow>
          <SmallRow>
          <FormItem>
            <Form.Label>Address 2</Form.Label>
            <Form.Control size='sm' placeholder="Apartment, Studio, Floor" disabled={!edit} />
          </FormItem>
            <FormItem>
              <Form.Label>Zipcode</Form.Label>
              <Form.Control size='sm' defaultValue={user.locations[0].zipcode} required disabled={!edit} />
            </FormItem>
          </SmallRow>
          <FormItem>
            <Button style={{ "width": "40%" }} size='sm' variant="primary" type="submit" disabled={!edit}>
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
