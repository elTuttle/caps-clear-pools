import React from 'react';
import Center from 'react-center'
import HomeForm from './HomeForm'
import ContactForm from './ContactForm'
import AboutForm from './AboutForm'
import ServicesForm from './ServicesForm'
import { Button, ButtonGroup, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import FacebookLogin from 'react-facebook-login';

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
      services: [],
      displayDiv: (
        <FacebookLogin
           appId="139726450054467"
           autoLoad={true}
           fields="name,email,picture"
           callback={this.responseFacebook}
           cssClass="my-facebook-button-class"
           icon="fa-facebook"
         />
      )
    }
  }

  componentWillMount() {
    fetch("http://ccp-beanstalk-env.myb98kmbra.us-west-1.elasticbeanstalk.com/home_pages/1")
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        motto: data.motto
      })
    })
    fetch("http://ccp-beanstalk-env.myb98kmbra.us-west-1.elasticbeanstalk.com/about_pages/1")
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
    fetch("http://ccp-beanstalk-env.myb98kmbra.us-west-1.elasticbeanstalk.com/contacts/1")
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        email: data.email,
        phone: data.phone
      })
    })
    fetch("http://ccp-beanstalk-env.myb98kmbra.us-west-1.elasticbeanstalk.com/services")
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
    this.setState({
      currentForm: <ServicesForm services={this.state.services} />
    })
  }

  responseFacebook = (response) => {
    if(response.email === "thejwt@gmail.com" || response.email === "collin-95@hotmail.com"){
      this.setState({
        displayDiv: (
          <ButtonGroup>
            <Button onClick={this.homeClick}>Home</Button>
            <Button onClick={this.contactClick}>Contact</Button>
            <Button onClick={this.aboutClick}>About</Button>
          </ButtonGroup>
        )
      })
    }
  }

  render() {

    return (
      <div>
        <br />
        <br />
        <ButtonGroup>
          <Button onClick={this.homeClick}>Home</Button>
          <Button onClick={this.contactClick}>Contact</Button>
          <Button onClick={this.aboutClick}>About</Button>
          <Button onClick={this.servicesClick}>Services</Button>
        </ButtonGroup>
        {this.state.currentForm}
      </div>
    )
  }

}


export default Admin;
