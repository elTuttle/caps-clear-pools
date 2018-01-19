import React from 'react';
import Center from 'react-center'
import { Button, ButtonGroup, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class ContactForm extends React.Component {

  constructor() {
    super();

    this.state = {
      email: "",
      phone: "",
      handleSubmit: this.handleContactSubmit.bind(this)
    }
  }

  componentWillMount() {
    this.setState({
      email: this.props.email,
      phone: this.props.phone
    })
  }

  handleContactSubmit = (event) => {
    event.preventDefault();
    const postEmail = this.state.email
    const postPhone = this.state.phone
    const bodyHash = {"email": postEmail, "phone": postPhone}
    fetch('http://localhost:3001/contacts/1',{
      method: "PATCH",
      body: JSON.stringify(bodyHash),
      headers: {
                  "Content-Type": "application/json"
      }
    })
  }

  handlePhoneChange = (event) => {
    this.setState({
      phone: event.target.value
    })
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  render() {

    return (
      <div>
        <Form>
          <h1>Contact:</h1>
          <FormGroup>
            <Label for="email">Email:</Label>
            <Input type="text" name="emailText" id="email" onChange={this.handleEmailChange} defaultValue={this.state.email}/>
            <Label for="phone">Phone:</Label>
            <Input type="text" name="phoneText" id="phone" onChange={this.handlePhoneChange} defaultValue={this.state.phone}/>
            <br />
            <Button onClick={this.state.handleSubmit}>Save</Button>
          </FormGroup>
        </Form>
      </div>
    )
  }

}


export default ContactForm;
