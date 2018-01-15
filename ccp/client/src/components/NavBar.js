import React from 'react';
import Center from 'react-center'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goToHome, goToAbout, goToServices} from '../actions/navbarActions'


class NavBar extends React.Component {


  handleHomeClick = () => {
    this.props.goToHome();
  }

  handleAboutClick = () => {
    this.props.goToAbout();
  }

  handleServicesClick = () => {
    this.props.goToServices();
  }

  render() {
    return (
      <div>
        <br />
        <div className="col-lg-12 navbar-div">
          <div className="col-lg-3">
            <h2 className="navbar-logo">Cap's Clean Pools</h2>
          </div>
          <div className="col-lg-1">
            <br />
          </div>
          <div className="col-lg-2">
            <Center>
              <h3 className="navbar-text" onClick={this.handleHomeClick}>Home</h3>
            </Center>
          </div>
          <div className="col-lg-2">
            <Center>
              <h3 className="navbar-text" onClick={this.handleAboutClick}>About</h3>
            </Center>
          </div>
          <div className="col-lg-2">
            <Center>
              <h3 className="navbar-text" onClick={this.handleServicesClick}>Services</h3>
            </Center>
          </div>
        </div>
      </div>
    )
  }

}


const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => { //getting dispatch actions necessary for Blackjack Component
  return bindActionCreators({
    goToHome: goToHome,
    goToAbout: goToAbout,
    goToServices: goToServices,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
