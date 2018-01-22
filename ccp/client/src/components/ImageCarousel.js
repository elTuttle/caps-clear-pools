import React from 'react';
import Center from 'react-center'

class ImageCarousel extends React.Component {

  constructor() {
    super();

    this.state = {
      carousel_images: [],
      loaded: false,
      promiseIsResolved: false
    }
  }

  componentWillMount() {
    fetch("http://ccp-beanstalk-env.myb98kmbra.us-west-1.elasticbeanstalk.com/home_pages/1")
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        carousel_images: data.carousel_images,
        promiseIsResolved: true
      })
    })
  }

  render() {

    const carousel_image_div = this.state.carousel_images.map((currentValue, index) => {
      return (
        <ul key={currentValue.id.toString()}>
          <li data-url={currentValue.image_file_name} data-width="1000" data-height="550"></li>
          <li data-thumbnail-path={currentValue.image_file_name}></li>
          <li data-thumbnail-text=""></li>
          <li data-info=""></li>
        </ul>
      )
    })

    return (
        <div className="image-carousel">
          <Center>
            <div id="myDiv"></div>
            <ul id="coverflowData" style={{"display": "none"}}>

            <ul className="category-header" data-cat=" ">
              {carousel_image_div}
            </ul>

            </ul>
          </Center>
        </div>
    )
  }

}


export default ImageCarousel;
