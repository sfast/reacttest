import React from 'react';
import { 
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  // FormText 
} from 'reactstrap';

const MyModal = ({ modal, toggle, className, header, formData }) => {
  return (
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>{header}</ModalHeader>
      <ModalBody>
          <Form>
              {formData.amp(data => {
                  switch(data.type) {
                    case 'input': return <MyInput {...data.configs}/>
                    case 'select': return <MySelect {...data.configs}/>
                    default : return null;
                  }
              })}
          </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" >Do Something</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

const MyInput = (props) => {
  return(
    <FormGroup>
      <Label for={props.id}>{props.label}</Label>
      <Input type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} />
    </FormGroup>
  )
}

const MySelect = (props) => {
  return (
    <FormGroup>
      <Label for={props.id}>Select</Label>
      <Input type={props.type} name={props.name} id={props.id}>
        {props.option.map(option => <option key={option}>{option}</option>)}
      </Input>
    </FormGroup>
  )
}
export default MyModal;