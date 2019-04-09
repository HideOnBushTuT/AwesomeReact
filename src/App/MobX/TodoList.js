import React from 'react';
import { observer } from 'mobx-react';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>{this.props.store.todos[0]}</h1>
    }
}

export default observer(TodoList);