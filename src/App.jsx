
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Explorer from './Explorer'
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    return(
      <>
        <Header />
        <Explorer/>
        <Footer />
      </>
    );
  }
}

export default App
