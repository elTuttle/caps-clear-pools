import React from 'react';
import Center from 'react-center'
import { Button, ButtonGroup, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import Dropzone from 'react-dropzone';
import request from 'superagent';

class AboutForm extends React.Component {

  constructor() {
    super();

    this.state = {
      about_1: "",
      about_2: "",
      about_3: "",
      about_4: "",
      handleSubmit: this.handleAboutSubmit.bind(this)
    }
  }

  componentWillMount() {
    this.setState({
      about_1: this.props.about_1,
      about_2: this.props.about_2,
      about_3: this.props.about_3,
      about_4: this.props.about_4
    })
  }

  handleAboutSubmit = (event) => {
    event.preventDefault();
    const bodyHash = {"about_1": this.state.about_1, "about_2": this.state.about_2, "about_3": this.state.about_3, "about_4": this.state.about_4}
    fetch('http://ccp-beanstalk-env.myb98kmbra.us-west-1.elasticbeanstalk.com/about_pages/1',{
      method: "PATCH",
      body: JSON.stringify(bodyHash),
      headers: {
                  "Content-Type": "application/json"
      }
    }).then(results => {
      if (results.status === 204) {
        window.location = "/admin/D4vbeqmsYe5rvy8B"
      }
    })
  }

  handle1Change = (event) => {
    this.setState({
      about_1: event.target.value
    })
  }

  handle2Change = (event) => {
    this.setState({
      about_2: event.target.value
    })
  }

  handle3Change = (event) => {
    this.setState({
      about_3: event.target.value
    })
  }

  handle4Change = (event) => {
    this.setState({
      about_4: event.target.value
    })
  }

  render() {

    return (
      <div>
        <Form>
          <h1>About:</h1>
          <FormGroup>
            <Center>
              <div className="col-lg-8">
                <Label for="aboutBody1Motto">About Body 1:</Label>
                <Input type="textarea" rows="5" name="aBody1" id="aboutBody1Motto" onChange={this.handle1Change} value={this.state.about_1}/>
                <Label for="aboutBody2Motto">About Body 2:</Label>
                <Input type="textarea" rows="5" name="aBody2" id="aboutBody2Motto" onChange={this.handle2Change} value={this.state.about_2}/>
                <Label for="aboutBody3Motto">About Body 3:</Label>
                <Input type="textarea" rows="5" name="aBody3" id="aboutBody3Motto" onChange={this.handle3Change} value={this.state.about_3}/>
                <Label for="aboutBody4Motto">About Body 4:</Label>
                <Input type="textarea" rows="5" name="aBody4" id="aboutBody4Motto" onChange={this.handle4Change} value={this.state.about_4}/>
                <br />
              </div>
            </Center>
            <Button onClick={this.state.handleSubmit}>Save</Button>
          </FormGroup>
        </Form>
      </div>
    )
  }

}


export default AboutForm;
