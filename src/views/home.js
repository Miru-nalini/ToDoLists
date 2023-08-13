import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Snoopy Tasty Chicken</title>
        <meta property="og:title" content="Snoopy Tasty Chicken" />
      </Helmet>
      <div className="home-body">
        <div className="home-header">
          <h1 className="home-text">To - Do Lists</h1>
        </div>
        <div className="home-top">
          <div className="home-container1">
            <button type="button" className="home-button button">
              <img
                src="https://img.icons8.com/pastel-glyph/64/user-male-circle.png "
                alt="image"
                loading="eager"
                className="home-image"
              />
              <h3>Mirunalini</h3>
            </button>
          </div>
          <div className="home-container2">
            <button type="button" className="home-button1 button">
              <img
                src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/64/external-calender-time-and-date-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png"
                alt="image"
                loading="eager"
                className="home-image1"
              />
              <h3>Calender</h3>
            </button>
            <button type="button" className="home-button2 button">
              <img
                src="https://img.icons8.com/pulsar-line/100/settings.png"
                alt="image"
                className="home-image2"
              />
              <h3>
                <span>Settings</span>
                <br></br>
              </h3>
            </button>
          </div>
        </div>
        <div className="home-main">
          <div className="home-side-panel">
            <div className="home-container3 button">
              <h4>Add Label </h4>
              <img
                src="https://img.icons8.com/fluency-systems-regular/48/add--v1.png"
                alt="image"
                className="home-image3"
              />
            </div>
            <div className="home-container4 button">
              <h4>General</h4>
            </div>
            <div className="home-container5 button">
              <h4>Assignments</h4>
            </div>
            <div className="home-container6 button">
              <h4>Unit Test</h4>
            </div>
            <div className="home-container7 button">
              <h4>Sem 5</h4>
            </div>
            <div className="home-container8 button">
              <h4>Culturals</h4>
            </div>
          </div>
          <div className="home-add-lists">
            <button type="button" className="home-button3 button">
              <img
                src="https://img.icons8.com/fluency-systems-regular/48/add--v1.png"
                alt="image"
                className="home-image4"
              />
              <h4>New</h4>
            </button>
            <div className="home-list-1">
              <input type="checkbox" className="home-checkbox" />
              <div className="home-details">
                <h4>Distributed Computing</h4>
                <span>
                  <span>Write inference for a journal</span>
                  <br></br>
                </span>
              </div>
              <button type="button" className="home-button4 button">
                <img
                  src="https://img.icons8.com/fluency-systems-regular/48/clock--v3.png"
                  alt="image"
                  className="home-image5"
                />
                <span>set remainder</span>
              </button>
            </div>
            <div className="home-list-11">
              <input type="checkbox" className="home-checkbox1" />
              <div className="home-details1">
                <h4>FSWD Unit Test 1</h4>
                <span>
                  <span>Learn unit 1</span>
                  <br></br>
                </span>
              </div>
              <button type="button" className="home-button5 button">
                <img
                  src="https://img.icons8.com/fluency-systems-regular/48/clock--v3.png"
                  alt="image"
                  className="home-image6"
                />
                <span>set remainder</span>
              </button>
            </div>
            <div className="home-list-12">
              <input type="checkbox" className="home-checkbox2" />
              <div className="home-details2">
                <h4>CN </h4>
                <span>
                  <span>Learn OSI model layers</span>
                  <br></br>
                </span>
              </div>
              <button type="button" className="home-button6 button">
                <img
                  src="https://img.icons8.com/fluency-systems-regular/48/clock--v3.png"
                  alt="image"
                  className="home-image7"
                />
                <span>set remainder</span>
              </button>
            </div>
            <div className="home-list-13">
              <input type="checkbox" className="home-checkbox3" />
              <div className="home-details3">
                <h4>DW</h4>
                <span>
                  <span>Complete ex 3</span>
                  <br></br>
                </span>
              </div>
              <button type="button" className="home-button7 button">
                <img
                  src="https://img.icons8.com/fluency-systems-regular/48/clock--v3.png"
                  alt="image"
                  className="home-image8"
                />
                <span>set remainder</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
