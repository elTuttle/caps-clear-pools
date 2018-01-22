import React from 'react'
import Center from 'react-center'
import { SocialIcon } from 'react-social-icons'

class Contact extends React.Component {

  constructor() {
    super();

    this.state = {
      email: "",
      phone: ""
    }
  }

  componentWillMount() {
    fetch("http://ccp-beanstalk-env.myb98kmbra.us-west-1.elasticbeanstalk.com/contacts/1")
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        email: data.email,
        phone: data.phone
      })
    })
  }

  render() {

    return (
      <div>
        <br />
        <p><strong>Email: </strong></p>
        <SocialIcon url={"mailto:" + this.state.email} />
        <br />
        <p><strong>{this.state.email}</strong></p>
        <br />
        <p><strong>Call:</strong></p>
        <p><strong>{this.state.phone}</strong></p>
      </div>
    )
  }

}


export default Contact;
