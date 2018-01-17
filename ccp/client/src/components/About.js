import React from 'react';
import Center from 'react-center'

class About extends React.Component {

  constructor() {
    super();

    this.state = {
      about_1: "",
      about_2: "",
      about_3: "",
      about_4: ""
    }
  }

  componentWillMount() {
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
  }

  render() {
    return (
      <div>
        <div className="col-lg-1">
          <br />
        </div>
        <div className="col-lg-11">
          <br />
          <h1 className="about-header col-lg-12">About:</h1>
          <hr  className="col-lg-10" />
          <h3 className="about-text col-lg-9">{this.state.about_1}</h3>

          <h3 className="about-text col-lg-9">{this.state.about_2}</h3>

          <h3 className="about-text col-lg-9">{this.state.about_3}</h3>

          <h3 className="about-text col-lg-9">{this.state.about_4}</h3>
        </div>

      </div>
    )
  }

}


export default About;
