import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Homepage from './components/Homepage'
import About from './components/About'
import Services from './components/Services'
import { connect } from 'react-redux';
import { SocialIcon } from 'react-social-icons';

class App extends Component {

  constructor() {
    super();

    this.state = {
      displayComponet: "",
      homepageHidden: "inline",
      motto: ""
    }

  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.home === true) {
      nextState.displayComponet = ""
      nextState.homepageHidden = "inline"
    } else if (nextProps.about === true) {
      nextState.displayComponet = <About />
      nextState.homepageHidden = "none"
    } else if (nextProps.services === true) {
      nextState.displayComponet = <Services />
      nextState.homepageHidden = "none"
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props) {
      return true
    } else {
      return false
    }
  }


  render() {

    return (
      <div className="App">
        <div className="col-lg-12">
          <NavBar />
        </div>
        <div className="col-lg-2">
          <br />
          <p><strong>Email: </strong></p>
          <SocialIcon url="mailto:capsclearpools@hotmail.com" />
          <br />
          <p><strong>capsclearpools@hotmail.com</strong></p>
          <br />
          <p><strong>Call:</strong></p>
          <p><strong>(210)-788-3572</strong></p>
        </div>
        <div className="col-lg-9" style={{"display":this.state.homepageHidden}}>
          <Homepage />
          <br />
          <div className="col-lg-12 image-carousel">
            <div id="myDiv"></div>
              <ul id="coverflowData"   style={{"display": "none"}}>

              <ul className="category-header" data-cat=" ">
                <ul>
                  <li data-url="./images/pool1.jpg" data-width="1000" data-height="550"></li>
                  <li data-thumbnail-path="./images/pool1.jpg"></li>
                  <li data-thumbnail-text=""></li>
                  <li data-info=""></li>
                </ul>
                <ul>
                  <li data-url="./images/pool2.jpg" data-width="1000" data-height="550"></li>
                  <li data-thumbnail-path="./images/pool2.jpg"></li>
                  <li data-thumbnail-text=""></li>
                  <li data-info=""></li>
                </ul>
                <ul>
                  <li data-url="./images/pool3.jpg" data-width="1000" data-height="550"></li>
                  <li data-thumbnail-path="./images/pool3.jpg"></li>
                  <li data-thumbnail-text=""></li>
                  <li data-info=""></li>
                </ul>
                <ul>
                  <li data-url="./images/pool4.jpg" data-width="1000" data-height="550"></li>
                  <li data-thumbnail-path="./images/pool4.jpg"></li>
                  <li data-thumbnail-text=""></li>
                  <li data-info=""></li>
                </ul>
                <ul>
                  <li data-url="./images/pool5.jpg" data-width="1000" data-height="550"></li>
                  <li data-thumbnail-path="./images/pool5.jpg"></li>
                  <li data-thumbnail-text=""></li>
                  <li data-info=""></li>
                </ul>
                <ul>
                  <li data-url="./images/pool6.jpg" data-width="1000" data-height="550"></li>
                  <li data-thumbnail-path="./images/pool6.jpg"></li>
                  <li data-thumbnail-text=""></li>
                  <li data-info=""></li>
                </ul>
              </ul>

            </ul>
          </div>
        </div>
        <div className="col-lg-9">
          {this.state.displayComponet}
        </div>
        <div className="col-lg-1">
          <br />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    home: state.home,
    about: state.about,
    services: state.services
  }
};

export default connect(mapStateToProps)(App);
