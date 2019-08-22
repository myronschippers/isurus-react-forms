import React, { Component } from 'react';

class LiveEmployee extends Component {
    render() {
        return (
            <div className="container">
                <p>{this.props.employee.name} is a {this.props.employee.occupation}</p>
            </div>
        );
    }
}

export default LiveEmployee;