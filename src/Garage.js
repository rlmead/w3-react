import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            brand: 'Whatever',
            model: 'Whatever',
            color: 'turquoise',
            year: 3582
        };
    }

    changeColor = () => {
        this.setState({color: 'aubergine'});
    }

    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} {this.state.model} from {this.state.year}.
                </p>
                <button
                    type='button'
                    onClick={this.changeColor}
                >Change color</button>
            </div>
        );
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
