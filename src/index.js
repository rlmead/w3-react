import React from 'react';
import ReactDOM from 'react-dom';

// const myfirstelement = <h1>hellloooOOoOoOOO!</h1>


class Car {
  constructor(name) {
    this.brand = name;
  }
  
  present = () => 'I have a ' + this.brand;

}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }
  
  show = () => this.present() + ', it is a ' + this.model;
  
}

let mycar = new Model('Ford', 'Mustang');
let output = mycar.show();

const car_element = <h1>{output}</h1>

ReactDOM.render(car_element, document.getElementById('root'));