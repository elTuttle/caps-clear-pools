import React from 'react';
import Center from 'react-center'
import ImageCarousel from './ImageCarousel'

class Homepage extends React.Component {

  constructor() {
    super();

    this.state = {
      motto: "",
      carousel_images: []
    }
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

    return (
      <div>
        <div className="col-lg-12 homepage-motto-div">
          <h2 className="homepage-motto">{this.state.motto}</h2>
          <ImageCarousel imageCarouselImages={this.props.carousel_images}/>
        </div>
      </div>
    )
  }

}


export default Homepage;
