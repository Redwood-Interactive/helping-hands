import React, { useState } from 'react';
import { Modal, Button, ModalDialog, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap'
import { AddItemModalContainer, UpperHalf, LowerHalf } from './Styles/AddItemModal.style.js';

const AddItemModal = (props) => {


  return (

    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <AddItemModalContainer>

        <Modal.Body>
          <UpperHalf>
            <LeftSide>
              <Title>

              </Title>
              <Category>

              </Category>
              <Condition>

              </Condition>
              <Location>

              </Location>
            </LeftSide>
            <RightSide>
              <Image/>
              <AddImageBtn>

              </AddImageBtn>
            </RightSide>

          </UpperHalf>
          <LowerHalf>
            <Description>

            </Description>
            <Submit>

            </Submit>
            <Cancel>

            </Cancel>

          </LowerHalf>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </AddItemModalContainer>
    </Modal>
  );
}

export default AddItemModal