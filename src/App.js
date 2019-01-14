import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Compoents/Home';
import Profile from './Compoents/Profile';
import Matches from './Compoents/Matches';
class App extends Component {
  constructor() {
    super();
    this.state = {
      user: "Dave",
      age: 27,
      matches: [{ name: "Julie", age: 48 }, { name: "Kulie", age: 48 }, { name: "Lulie", age: 48 }],
      page: "home"
    }
  }

  moveToProfile = () => {
    this.setState({ page: "profile" })
  }

  incrementAge = () => {
    this.setState({
      age: this.state.age + 1
    })
  }

  changeName = () => {
    this.setState({
      user: "New Name"
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.page === "home" && <Home moveToProfile={this.moveToProfile} helloWorld="hello world" />}
        {this.state.page === "profile" && <Profile 
                                            user={this.state.user} 
                                            age={this.state.age} 
                                            incrementAge={this.incrementAge} 
                                            changeName={this.changeName}
                                            />}
        {this.state.page === "matches" && <Matches />}
      </div>
    );
  }
}

export default App;
