import React from 'react';
import Center from 'react-center'
import HomeForm from './HomeForm'
import ContactForm from './ContactForm'
import AboutForm from './AboutForm'
import { Button, ButtonGroup, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class Admin extends React.Component {

  constructor() {
    super();

    this.state = {
      currentForm: "",
      motto: "",
      about_1: "",
      about_2: "",
      about_3: "",
      about_4: "",
      email: "",
      phone: "",
      services: []
    }
  }

  componentWillMount() {
    fetch("http://localhost:3001/home_pages/1")
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        motto: data.motto
      })
    })
    fetch("http://localhost:3001/about_pages/1")
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        about_1: data.about_1,
        about_2: data.about_2,
        about_3: data.about_3,
        about_4: data.about_4
      })
    })
    fetch("http://localhost:3001/contacts/1")
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        email: data.email,
        phone: data.phone
      })
    })
    fetch("http://localhost:3001/services")
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        services: data
      })
    })
  }

  homeClick = () => {
    this.setState({
      currentForm: <HomeForm motto={this.state.motto}/>
    })
  }

  contactClick = () => {
    this.setState({
      currentForm: <ContactForm email={this.state.email} phone={this.state.phone} />
    })
  }

  aboutClick = () => {
    this.setState({
      currentForm: <AboutForm about_1={this.state.about_1} about_2={this.state.about_2} about_3={this.state.about_3} about_4={this.state.about_4} />
    })
  }

  servicesClick = () => {
    const service_names = this.state.services.map((currentValue, index) => {

      const service_items_we_do = currentValue.service_items.map((currentValue, index) => {
        if (currentValue.who_int === 1) {
          return <Input type="text" id={"service_item" + currentValue.id} defaultValue={currentValue.value}/>
        }
      })

      const service_items_you_do = currentValue.service_items.map((currentValue, index) => {
        if (currentValue.who_int === 2) {
          return <Input type="text" id={"service_item" + currentValue.id} defaultValue={currentValue.value}/>
        }
      })

      return <FormGroup>
                <Label ><strong style={{"fontSize":"2em"}}>{currentValue.title}:</strong></Label>
                <p>Service Name:</p>
                <Input type="text" id={"service" + currentValue.id} defaultValue={currentValue.title}/>
                <p>What We Do:</p>
                {service_items_we_do}
                <p>What Customers Do:</p>
                {service_items_you_do}

             </FormGroup>
    })

    this.setState({
      currentForm: <Form onSubmit={this.handleServicesSubmit}>
        <h1>Services:</h1>
        {service_names}
        <br />
        <Input type="submit" value="Save"/>
        <br />
      </Form>
    })
  }

  render() {




    return (
      <div>
        <br />
        <ButtonGroup>
          <Button onClick={this.homeClick}>Home</Button>
          <Button onClick={this.contactClick}>Contact</Button>
          <Button onClick={this.aboutClick}>About</Button>
        </ButtonGroup>
        <br />
        <br />
        {this.state.currentForm}
      </div>
    )
  }

}


export default Admin;
