import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: 'true',
            brand: 'Whatever',
            model: 'Whatever',
            color: 'turquoise',
            year: 3582
        };
    }

    changeColor = () => {
        this.setState({color: 'aubergine'});
    }

    explode = () => {
        alert(`${this.state.model} exploded!`);
        this.setState({show: false});
    }

    render() {
        let show_car;
        if (this.state.show) {
            show_car = `My ${this.state.brand} is a ${this.state.color} ${this.state.model} from ${this.state.year}.`
        };
        return (
            <div>
                <h1>{show_car}</h1>
                <button
                    type='button'
                    onClick={this.changeColor}
                >Change color</button>
                <button onClick={this.explode}>EXPLODE</button>
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
