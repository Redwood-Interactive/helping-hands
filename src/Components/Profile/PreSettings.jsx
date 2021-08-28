import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import { FormItem, FormRow, ImageItem, InputContainer, DropdownMenu } from './Styles/Settings.style.js'

const PreSettings = () => {
  return (
    <InputContainer>
      <h1>User Settings</h1>
      <Link id='link' to='/profile'>
      <img src='https://image.shutterstock.com/image-vector/passport-drivers-license-flat-icon-260nw-1927066082.jpg'></img>
      </Link>
      <Form>
          <ImageItem>
            <Image src="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1070837284-e1611613819374.jpg?w=1946" roundedCircle />
            <Form.Label>Profile Pic</Form.Label>
            <Form.Control type="file" disabled/>
          </ImageItem>
          <FormRow>
          <FormItem>
              <Form.Label>First Name</Form.Label>
              <Form.Control size='sm' disabled/>
              </FormItem>
              <FormItem>
              <Form.Label>Last Name</Form.Label>
              <Form.Control size='sm' disabled/>
              </FormItem>
          </FormRow>
          <FormItem>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" disabled />
          </FormItem>
          <FormItem>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control placeholder="(888) 123-4567" disabled/>
          </FormItem>
          <FormItem>
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" disabled/>
          </FormItem>
          <FormItem>
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, Studio, Floor" disabled/>
          </FormItem>
          <FormRow>
            <FormItem>
              <Form.Label>City</Form.Label>
              <Form.Control disabled/>
            </FormItem>
            <FormItem>
              <Form.Label>State</Form.Label>
              <Dropdown disabled>
                <Dropdown.Toggle variant="outline-secondary">
                  State
                </Dropdown.Toggle>
              </Dropdown>
            </FormItem>
            <FormItem>
              <Form.Label>Zipcode</Form.Label>
              <Form.Control disabled/>
            </FormItem>
          </FormRow>
      </Form>
    </InputContainer>
  )
};

export default PreSettings;