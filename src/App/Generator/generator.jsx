import React from 'react';
var fetch = require('node-fetch');

function* gen(url) {
    var response = yield fetch(url);
    var data = yield response.json();
    var [name] = data.results;
    console.log('result:' + name);
    return name;
}

export default class GeneratorBasic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
    }

    render() {
        return <div className={'App'}>
            <div><a>{this.state.name}</a></div>
            <div><button onClick={() => {
                gen('https://api.randomuser.me/').next();
                let name = gen().next();
                console.log('name: ', name);
                this.setState({ name: name });
            }}>Get Name</button>
            </div>
        </div>
    }
}