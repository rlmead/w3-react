import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form.js';
import Garage from './Garage.js';
import styles from './mystyle.module.css';

ReactDOM.render(<Form />, document.getElementById('root'));

// can only render one thing at a time?!
// ReactDOM.render(<Garage />, document.getElementById('root'));