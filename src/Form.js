import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }

    update_header = (event) => {
        this.setState({ username: event.target.value });
    }

    render() {
        return (
            <form>
                <h1>Hello {this.state.username}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    onChange={this.update_header}
                />
            </form>
        )
    }

}

export default Form;
