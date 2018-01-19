import React from 'react';
import Center from 'react-center'
import { Button, ButtonGroup, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class HomeForm extends React.Component {

  constructor() {
    super();

    this.state = {
      motto: "",
      handleSubmit: this.handleHomeSubmit.bind(this)
    }
  }

  componentWillMount() {
    this.setState({
      motto: this.props.motto
    })
  }

  handleHomeSubmit = (event) => {
    event.preventDefault();
    const postMotto = this.state.motto
    fetch('http://localhost:3001/home_pages/1',{
      method: "PATCH",
      body: JSON.stringify(postMotto),
      headers: {
                  "Content-Type": "application/json"
      }
    })
  }

  handleChange = (event) => {
    this.setState({
      motto: event.target.value
    })
  }

  render() {

    return (
      <div>
        <Form>
          <h1>Home:</h1>
          <FormGroup>
            <Label for="homepageMotto">Home Page Motto:</Label>
            <Input type="text" name="motto" id="homepageMotto" onChange={this.handleChange} value={this.state.motto}/>
            <br />
          </FormGroup>
          <Button onClick={this.state.handleSubmit}>Save</Button>
        </Form>
      </div>
    )
  }

}


export default HomeForm;
