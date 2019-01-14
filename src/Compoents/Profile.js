import React, {Component} from "react";

export default class Profile extends Component {
    render(){
        return (<div>
                    <h1>Profile </h1>
                    <p>{this.props.user}</p>
                    <p>{this.props.age}</p>
                    <button onClick={this.props.incrementAge}>Increment age </button>
                    <button onClick={this.props.changeName}>Change Name </button>
                </div>)
    }
}