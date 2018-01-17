import React from 'react';
import Center from 'react-center'

class Homepage extends React.Component {

  constructor() {
    super();

    this.state = {
      motto: ""
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
  }

  render() {

    return (
      <div>
        <div className="col-lg-12 homepage-motto-div">
          <h2 className="homepage-motto">{this.state.motto}</h2>
        </div>
      </div>
    )
  }

}


export default Homepage;
