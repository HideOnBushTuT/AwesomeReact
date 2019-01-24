import React from 'react';

export default class InputWithoutHooks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Mary',
        }

        this.handlerNameChange = this.handlerNameChange.bind(this);
    }

    handlerNameChange(e) {
        this.setState({
            name: e.target.value,
        });
    }

    render() {
        return (
            <div className="App">
                <p>{this.state.name}</p>
                <input
                    value={this.state.name}
                    onChange={this.handlerNameChange}
                />
            </div>
        );
    }
}
