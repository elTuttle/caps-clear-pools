import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Homepage from './components/Homepage'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Admin from './components/Admin'
import ImageCarousel from './components/ImageCarousel'
import ImageLoader from './components/ImageLoader'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goToAdmin } from './actions/navbarActions'
import { SocialIcon } from 'react-social-icons';
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Loader from 'react-loader';

var carousel_images = []

class App extends Component {

  constructor() {
    super();

    this.state = {
      displayComponet: "",
      homepageHidden: "inline",
      motto: "",
      carousel_images: []
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
    } else if (nextProps.admin === true) {
      nextState.displayComponet = <Admin />
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

  handleAdminClick = () => {
    this.props.goToAdmin()
  }

 carousel_request = async () => {
    const response = await fetch("http://ccp-beanstalk-env.myb98kmbra.us-west-1.elasticbeanstalk.com/home_pages/1")
    const json = await response.json().carousel_images
  }

  componentWillMount() {
    fetch("http://ccp-beanstalk-env.myb98kmbra.us-west-1.elasticbeanstalk.com/home_pages/1")
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        motto: data.motto,
        carousel_images: data.carousel_images
      })
    })
  }


  render() {

    const carousel_images = this.carousel_request();

    return (
      <Router >
        <div className="App">
          <Switch>
            <Route exact path="/admin/D4vbeqmsYe5rvy8B" component={Admin} />
          </Switch>
          <div className="col-lg-12">
            <NavBar />
          </div>
          <div className="col-lg-2">
            <Contact />
          </div>
          <div className="col-lg-9" style={{"display":this.state.homepageHidden}}>
            <Homepage carouselImages={this.state.carousel_images}/>
          </div>
          <div className="col-lg-9">
            {this.state.displayComponet}
          </div>
          <div className="col-lg-1">
            <br />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    home: state.home,
    about: state.about,
    services: state.services,
    admin: state.admin
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    goToAdmin: goToAdmin
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
