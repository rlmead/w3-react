import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {

    constructor() {
        super();
        this.state = { color: 'red' };
    }

    render() {
        return <h2>Hi, I am a {this.state.color} Car!</h2>;
    }

}

class Garage extends React.Component {
    constructor() {
        super();
        this.state = { size: 'medium' };
    }

    render() {
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <Car />
            </div>
        )
    }
}

export default Garage;
