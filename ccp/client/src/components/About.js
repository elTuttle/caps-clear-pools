import React from 'react';
import Center from 'react-center'

class About extends React.Component {

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
          <h3 className="about-text col-lg-9">Here at Cap’s Clear Pools we are dedicated to giving you the most enjoyable time possible
            owning a pool.</h3>

          <h3 className="about-text col-lg-9">My name is Collin, I am the owner of Cap’s Clear pool, at 22 years old I maybe young but I do know my
          stuff. With almost 5 years of hands on pool experience I am well educated in everything I need to know
          to keep your pool crystal clear and running properly all year long.</h3>

          <h3 className="about-text col-lg-9">I was born and raised here in San Antonio, graduated from Samuel Clemens in 2014. Most of my high
          school career I worked at leslies pool supply testing and helping customers get their pools on track
          them-selves, this is where I found my love for pools and helping people. Once I left there I started
          college and cleaning pools on the side to make some extra money, then last year I started this business
          after I decided school wasn’t the right choice for me.</h3>
        </div>

      </div>
    )
  }

}


export default About;
