import React from 'react';
import Center from 'react-center'

class Homepage extends React.Component {

  render() {
    return (
      <div>
          <br />
          <div className="col-lg-12 homepage-motto-div">
            <h2 className="homepage-motto">Here at Cap’s Clear Pools we are dedicated to giving you the most enjoyable time possible
owning a pool!</h2>
          </div>

          <div className="col-lg-12">
            <br />
          </div>

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
    )
  }

}


export default Homepage;
