import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import './Footer.js';
import Footer from './Footer'
import Header from './Header'


//this is contentful code until line 15
const contentful = require('contentful')

const client = contentful.createClient({
  space: 'l805816u6suv',
  accessToken: '2b2c0a52da58d3579e629209ce3f6f7656bad28d04820e04bb24d5385e17de96'
}) // telling clinent we're using contentful
// this ideally shouldnt be public

class Home extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      text: ''
    }
  }

  //lets inject the values after contentful ^ (api call)
  componentWillMount() {
    client.getEntry('1EuDAS5JosMq8EemS222GI')
    .then((entry) => this.setState({ //the data is called entry
      title: entry.fields.title,
      text: entry.fields.text
    }))
    .catch(console.error)
  }




  //my js grid switch



  render() {
    return (
      <div className="Home">
      <Header />

        <header className="Home-header">
        {/* <div className="nav">
          <div className="home"><a href="">Home</a></div>
          <div className="page1"><a href="">page 1</a></div>
        </div> */}

          <img src={logo} className="Home-logo" alt="logo" />
          <h1 className="Home-title">{this.state.title}</h1>
          <p className="">{this.state.text}</p>
          <button className="Home-button">Enter the course</button>
        </header>
        <div className="Home-grid">
          <div className="Home-card"/>
          <p className="Home-intro">
          To get started, edit <code>src/Home.js</code> and save to reload.
        </p>
        </div>
        <div className="btn-grid-row">
          <button className="btn-grid-switch">list view</button>
          <button className="btn-grid-switch">grid view</button>
        </div>
        <button className="btn-like">LIKE COUNTER {this.state.title}</button>



        {/* exports.handler = function(event, context, callback) {
          // your server-side functionality
        } */}

        <div className="Home-gallery">
          <div className="Home-card" />
          <div className="Home-card" />
          <div className="Home-card" />
          <div className="Home-card" />
          <div className="Home-card" />
          <div className="Home-card" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
