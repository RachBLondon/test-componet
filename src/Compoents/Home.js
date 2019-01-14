import React, {Component} from "react";

export default class Home extends Component {
    render(){
        return <div>
            <h1>Home</h1>
            <p>{this.props.helloWorld}</p>
            <button onClick={this.props.moveToProfile}>Profile </button>
        </div>
    }
}