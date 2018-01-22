import React from 'react';
import Center from 'react-center'
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Services extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: true,
      services: [],
      whatWeDoStrings: "",
      whatYouDoStrings: "",
      title: "",
      price: 140
    };
  }

  toggle(event) {
    this.setState({
    collapse: false,
    title: event.target.textContent
    });
    fetch("http://ccp-beanstalk-env.myb98kmbra.us-west-1.elasticbeanstalk.com/services/" + event.target.dataset.id)
    .then(results => {
      return results.json();
    }).then(data => {
      const weDo = data.service_items.map((currentValue, index) => {
        if (currentValue.who_int === 1) {
          return <p style={{"color":"white"}}>{currentValue.value}</p>
        }
      })
      const youDo = data.service_items.map((currentValue, index) => {
        if (currentValue.who_int === 2) {
          return <p style={{"color":"white"}}>{currentValue.value}</p>
        }
      })
      this.setState({
        price: data.price,
        whatWeDoStrings: weDo,
        whatYouDoStrings: youDo,
      })
    })

    function changeCollapse() {
      this.setState({
        collapse: true
      })
    }

    var thisChangeCollapse = changeCollapse.bind(this);

    setInterval(function(){
      thisChangeCollapse();
    }, 500)

  }



  componentWillMount() {
    fetch("http://ccp-beanstalk-env.myb98kmbra.us-west-1.elasticbeanstalk.com/services")
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        services: data,
        title: data[0].title + ":"
      })
    })
    fetch("http://ccp-beanstalk-env.myb98kmbra.us-west-1.elasticbeanstalk.com/services/1")
    .then(results => {
      return results.json();
    }).then(data => {
      const weDo = data.service_items.map((currentValue, index) => {
        if (currentValue.who_int === 1) {
          return <p style={{"color":"white"}}>{currentValue.value}</p>
        }
      })
      const youDo = data.service_items.map((currentValue, index) => {
        if (currentValue.who_int === 2) {
          return <p style={{"color":"white"}}>{currentValue.value}</p>
        }
      })
      this.setState({
        whatWeDoStrings: weDo,
        whatYouDoStrings: youDo
      })
    })
  }


  render() {

    const service_buttons = this.state.services.map((currentValue, index) => {
      return <div className="col-lg-12">
          <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }} data-id={currentValue.id}>{currentValue.title}:</Button>
        </div>
    })

    return (
      <div>
        <br />

        <br />

        <div className="col-lg-1">
          {service_buttons}
        </div>
        <div className="col-lg-2">
          <br />
        </div>
        <div className="col-lg-8 service-div">
          <Collapse isOpen={this.state.collapse}>
            <h2 ><strong style={{"color":"white"}}>{this.state.title}</strong> </h2>
            <h3 style={{"color":"white"}}>Starting at ${this.state.price}</h3>
            <h2 style={{"color":"lightblue"}}>What we do each week:</h2>
              {this.state.whatWeDoStrings}
            <h2 style={{"color":"lightblue"}}><strong>What you do:</strong></h2>
              {this.state.whatYouDoStrings}
          </Collapse>
        </div>
      </div>
    )
  }

}


export default Services;
