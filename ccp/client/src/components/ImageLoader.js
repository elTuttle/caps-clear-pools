import React from 'react';
import Center from 'react-center'
import ImageCarousel from './ImageCarousel'

class ImageLoader extends React.Component {

  constructor() {
    super();

    this.state = {
      carousel_images: [],
      loaded: false
    }
  }

  componentWillMount() {
    fetch("http://ccp-beanstalk-env.myb98kmbra.us-west-1.elasticbeanstalk.com/home_pages/1")
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        carousel_images: data.carousel_images
      })
    })
  }

  shouldComponentUpdate(nextProps,nextState) {
    nextState.loaded = true
  }

  render() {
      return <ImageCarousel carousel_images={this.state.carousel_images}/>
  }

}


export default ImageLoader;
