import React from 'react';
import Center from 'react-center'
import { Button, ButtonGroup, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class ServicesForm extends React.Component {

  constructor() {
    super();

    this.state = {
      service_names: [],
      services: [],
      handleSubmit: this.handleServicesSubmit.bind(this),
      title: "Untitled Service",
      whatWeDo: "",
      price: 0,
      whatYouDo: "Keep water at proper level;Have any problems with equipment fixed ASAP;Report any issues with the pool to Cap's Clear Pools ASAP (equipment/water issues)"
    }
  }

  componentWillMount() {
    this.setState({
      services: this.props.services
    })
  }

  handleServicesSubmit = (event) => {
    event.preventDefault();
    const serviceTitle = this.state.title
    const serviceWWD = this.state.whatWeDo
    const serviceWYD = this.state.whatYouDo
    const servicePrice = this.state.price
    const bodyHash = {"title": serviceTitle, "whatWeDo": serviceWWD, "whatYouDo": serviceWYD, "price": servicePrice}
    fetch('http://localhost:3001/services',{
      method: "POST",
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

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handlePriceChange = (event) => {
    this.setState({
      price: event.target.value
    })
  }

  handleWWDChange = (event) => {
    this.setState({
      whatWeDo: event.target.value
    })
  }

  handleWYDChange = (event) => {
    this.setState({
      whatYouDo: event.target.value
    })
  }

  handleDeleteClick = (event) => {

  }

  render() {

    const services_names = this.state.services.map((currentValue, index) => {
      return <div><h3>{currentValue.title}</h3><button data-id={currentValue.id} onClick={this.handleDeleteClick}>X</button></div>
    })

    return (
      <div>
        <h1>Services:</h1>
        {services_names}
        <Form>
          <h2>New Service:</h2>
          <h3>Title:</h3>
          <Center>
            <div className="col-lg-4">
              <Input type="text" onChange={this.handleTitleChange} value={this.state.title}/>
            </div>
          </Center>
          <h3>Price:</h3>
          <Center>
            <div className="col-lg-4">
              <Input type="number" onChange={this.handlePriceChange} value={this.state.price}/>
            </div>
          </Center>
          <h3>What We Do:</h3>
          <Center>
            <div className="col-lg-6">
              <Input type="textarea" rows="6" onChange={this.handleWWDChange} value={this.state.whatWeDo} placeholder="Example: Vacuum floor;Skim Surface;Empty Skimmer Basket" />
            </div>
          </Center>
          <h3>What You Do:</h3>
          <Center>
            <div className="col-lg-6">
              <Input type="textarea" rows="4" onChange={this.handleWYDChange} value={this.state.whatYouDo} />
            </div>
          </Center>
          <br />
          <Button onClick={this.state.handleSubmit}>Save</Button>
        </Form>
      </div>
    )
  }

}


export default ServicesForm;
