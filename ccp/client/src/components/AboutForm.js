import React from 'react';
import Center from 'react-center'
import { Button, ButtonGroup, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

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
    const postMotto = this.state.motto
    debugger;
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
            <Label for="aboutBody1Motto">About Body 1:</Label>
            <Input type="textarea" name="aBody1" id="aboutBody1Motto" onChange={this.handle1Change} value={this.state.about_1}/>
            <Label for="aboutBody2Motto">About Body 2:</Label>
            <Input type="textarea" name="aBody2" id="aboutBody2Motto" onChange={this.handle2Change} value={this.state.about_2}/>
            <Label for="aboutBody3Motto">About Body 3:</Label>
            <Input type="textarea" name="aBody3" id="aboutBody3Motto" onChange={this.handle3Change} value={this.state.about_3}/>
            <Label for="aboutBody4Motto">About Body 4:</Label>
            <Input type="textarea" name="aBody4" id="aboutBody4Motto" onChange={this.handle4Change} value={this.state.about_4}/>
            <br />
            <Button onClick={this.state.handleSubmit}>Save</Button>
          </FormGroup>
        </Form>
      </div>
    )
  }

}


export default AboutForm;
