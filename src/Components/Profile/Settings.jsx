import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link, useLocation, Redirect } from 'react-router-dom';

import { FormItem, FormRow, ImageItem, InputContainer, DropdownMenu, ImageRow, ProfileIcon, AddrRow, SettingRow, SmallRow } from './Styles/Settings.style.js'

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
  console.log(userInfo);
    const [validated, setValidated] = useState(false);
    const [edit, setEdit] = useState(false);
    const [check, setCheck] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('1');
    const [streetName, setStreetName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('AK');
    const [zipcode, setZipcode] = useState('');
  // const { user } = location.state;
  useEffect (() => {
    var loc = userInfo.locations;
    console.log(loc);
    setFirstName(userInfo.first_name);
    setLastName(userInfo.last_name);
    setEmail(userInfo.email);
    setPhone('1');
    if (userInfo.locations) {
    setStreetName(userInfo.locations[0].street_name);
    setCity(userInfo.locations[0].city);
    setState(userInfo.locations[0].state);
    setZipcode(userInfo.locations[0].zipcode);
    }
  }, userInfo)

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
    var body = {
      id: userInfo.id,
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: parseInt(phone),
      profile_pic: userInfo.profile_pic,
      location: {
        user_id: userInfo.id,
        street_name: streetName,
        city: city,
        state: state,
        zipcode: zipcode
      }
    }
    console.log('BODY', body);
  }
    event.preventDefault();
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
            <img style={{ "heigth": "50px", "width": "50px" }} src='https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/512x512/plain/id_badge.png'></img>
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
              <Form.Control
              size='sm'
              type='text'
              defaultValue={firstName}
              required
              disabled={!edit}
              onChange={(e) => setFirstName(e.target.value)} />
            </FormItem>
            <FormItem>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
              size='sm'
              value={lastName}
              required
              disabled={!edit}
              onChange={(e) => setLastName(e.target.value)} />
            </FormItem>
          </FormRow>
          <FormRow>
            <FormItem>
              <Form.Label>Email</Form.Label>
              <Form.Control
              size='sm'
              type="email"
              value={email}
              placeholder="Enter email"
              required
              disabled={!edit}
              onChange={(e) => setEmail(e.target.value)}/>
            </FormItem>
            <FormItem>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
              size='sm'
              placeholder="(888) 123-4567"
              value={phone}
              required
              disabled={!edit}
              onChange={(e) => setPhone(e.target.value)}/>
            </FormItem>
          </FormRow>
          <AddrRow>
            <FormItem>
              <Form.Label>Address</Form.Label>
              <Form.Control
              size='sm'
              placeholder="1234 Main St"
              value={streetName}
              required
              disabled={!edit}
              onChange={(e) => setStreetName(e.target.value)}/>
            </FormItem>
            <FormItem>
              <Form.Label>City</Form.Label>
              <Form.Control
              size='sm'
              value={city}
              required
              disabled={!edit}
              onChange={(e) => setCity(e.target.value)} />
            </FormItem>
            <FormItem>
              <Form.Label>State</Form.Label>
              <Dropdown onSelect={(eventKey) => setState(eventKey)}>
                <Dropdown.Toggle
                  size='sm'
                  variant="outline-secondary"
                  disabled={!edit}>
                  {state}
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ "height": "140px", "overflowY": "scroll" }}>
                  {states.map((stateobj) => (
                    <Dropdown.Item eventKey={stateobj}>{stateobj}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </FormItem>
          </AddrRow>
          <SmallRow>
            <FormItem>
              <Form.Label>Address 2</Form.Label>
              <Form.Control
                size='sm'
                placeholder="Apartment, Studio, Floor"
                disabled={!edit} />
            </FormItem>
            <FormItem>
              <Form.Label>Zipcode</Form.Label>
              <Form.Control
                size='sm'
                value={zipcode}
                required
                disabled={!edit}
                onChange={(e) => setZipcode(e.target.value)}/>
            </FormItem>
          </SmallRow>
          <FormItem>
            <Button
              style={{ "width": "40%" }}
              size='sm' variant="primary"
              type="submit"
              disabled={!edit}>
              Submit
            </Button>
          </FormItem>
        </Form>
      </InputContainer>
    )
  }


  if (Object.keys(userInfo).length === 0) {
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
