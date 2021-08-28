import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import PreSettings from './PreSettings.jsx'
import { FormItem, FormRow, ImageItem, InputContainer, DropdownMenu } from './Styles/Settings.style.js'

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


const Settings = () => {

  const [validated, setValidated] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const renderSettings = () => {
    if (!edit) {
      return <PreSettings/>
    } else {
      return (
        <InputContainer>
      <h1>User Settings</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <ImageItem>
            <Image src="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1070837284-e1611613819374.jpg?w=1946" roundedCircle />
            <Form.Label>Profile Pic</Form.Label>
            <Form.Control type="file" />
          </ImageItem>
          <FormRow>
          <FormItem>
              <Form.Label>First Name</Form.Label>
              <Form.Control size='sm' required />
              </FormItem>
              <FormItem>
              <Form.Label>Last Name</Form.Label>
              <Form.Control size='sm' required />
              </FormItem>
          </FormRow>
          <FormItem>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </FormItem>
          <FormItem>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control placeholder="(888) 123-4567" required />
          </FormItem>
          <FormItem>
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" required />
          </FormItem>
          <FormItem>
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, Studio, Floor" />
          </FormItem>
          <FormRow>
            <FormItem>
              <Form.Label>City</Form.Label>
              <Form.Control required />
            </FormItem>
            <FormItem>
              <Form.Label>State</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="outline-secondary">
                  State
                </Dropdown.Toggle>
                <DropdownMenu>
                <Dropdown.Menu style={{"height": "200px", "overflowY": "scroll"}}>
                  {states.map((state) => (
                    <Dropdown.Item value={state}>{state}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
                </DropdownMenu>
              </Dropdown>
            </FormItem>
            <FormItem>
              <Form.Label>Zipcode</Form.Label>
              <Form.Control required />
            </FormItem>
          </FormRow>
          <Button variant="primary" type="submit">
            Submit
          </Button>
      </Form>
    </InputContainer>
      )
    }
  }
  return (
    renderSettings()
  )
};

export default Settings;
