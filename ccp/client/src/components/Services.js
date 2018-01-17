import React from 'react';
import Center from 'react-center'
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Services extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: true };
  }

  toggle(event) {
    this.setState({ collapse: !this.state.collapse });
  }


  render() {


    return (
      <div>
        <br />

        <br />

        <div className="col-lg-1">
          <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Full-service care:</Button>
        </div>
        <div className="col-lg-11">
          <a href="./capsclearpoolscontract.pdf" download style={{"color":"darkblue"}}><strong>Service Contract PDF</strong></a>
        </div>
        <div className="col-lg-11">
          <Collapse isOpen={this.state.collapse}>
            <h2><strong>Full-service care:</strong> What we do each week</h2>
              <p> Brush walls and steps</p>
              <p> Skim surface</p>
              <p> Vacuum floor</p>
              <p> Empty skimmer basket</p>
              <p> Empty pump basket(s)</p>
              <p> Empty APC bag/filter</p>
              <p> Backwash on regular basis</p>
              <p> Test and adjust your water chemistry</p>
              <p> Verify pool filtration working properly</p>
              <p> Report any issues with pool VIA pool recap or phone call</p>
              <p> We keep your pool looking beautiful all year long</p>
            <h2><strong>What you do:</strong></h2>
              <p> Keep water at proper level</p>
              <p> Have any problems with equipment fixed ASAP</p>
              <p> Report any issues with the pool to Caps Clear Pools ASAP (equipment/water issues)</p>
          </Collapse>
        </div>
      </div>
    )
  }

}


export default Services;
