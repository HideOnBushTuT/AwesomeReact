import React from "react";
import '../../App.css';
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from 'redux-saga';

import { HelloSaga } from '../saga/HelloSaga';

import { logger } from "redux-logger";
import { createSelector } from "reselect";
import thunk from 'redux-thunk';
import { request } from "http";

const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";
const REQUEST = 'requesting';
const REQEUST_DONE = 'request_done';

const increment = () => {
    return {
        type: INCREMENT,
    };
};

const decrement = () => {
    return {
        type: DECREMENT,
    };
};

const decrementAsync = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(decrement());
        }, 1000);
    };
}


const requesting = () => {
    return {
        type: REQUEST,
    };
};

const requestDone = () => {
    return {
        type: REQEUST_DONE,
    };
};

const fetchName = (url) => {
    return async dispatch => {
        await dispatch(requesting());
        const response = await fetch(url);
        const data = await response.json();
        const [item] = data.results;
        dispatch(requestDone(item));
    };

};

// const decrementAsync = (next) => dispatch => {
//     setTimeout(() => {
//         dispatch(decrement());
//     });
// }
const reset = () => {
    return {
        type: RESET,
    };
};

const initValue = { count: 0, name: 'caibi' };
const CounterReducer = (state = initValue, action) => {

    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        case RESET:
            return initValue;
        default:
            return initValue;
    }
}

const fetchReducer = (state = initValue, action) => {
    switch (action.type) {
        case REQUEST:
            return { ...state, name: REQUEST };
        case REQEUST_DONE:
            return { ...state, name: action.payload };
        default:
            return initValue;
    }
}
const sagaMiddleware = createSagaMiddleware();

const store = createStore(CounterReducer, initValue, applyMiddleware(logger, thunk, sagaMiddleware));

// then run the saga
sagaMiddleware.run(HelloSaga); 

// const Counter = ({ count, name, onIncrement, onDecrement, onReset }) => {
//     console.log('Counter Component rerendered !')
//     return (
//         <div className='App'>
//             <div><a>{name}</a></div>
//             <div>{count}</div>
//             <button onClick={onIncrement}>+</button>
//             <button onClick={onDecrement}>-</button>
//             <button onClick={onReset}>reset</button>
//         </div>
//     );
// };

class Counter extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        let value = this.props.count !== nextProps.count || this.props.name !== nextProps.name;
        console.log('shouldComponentUpdate:', value);
        return value;
    }

    render() {
        console.log('Counter Component rerendered !')
        return (
            <div className='App'>
                <div><a>{this.props.name}</a></div>
                <div>{this.props.count}</div>
                <button onClick={this.props.onIncrement}>+</button>
                <button onClick={this.props.onDecrement}>-</button>
                <button onClick={this.props.onReset}>reset</button>
            </div>
        );
    }
}

const calculatorCount = (state) => state.count;

const getCount = createSelector([calculatorCount], (state) => {
    return state.count;
});

const calculatorName = (state) => state.name;

const getName = createSelector([calculatorName], (state) => {
    return state.name
})

const mapStateToProps = (state) => {
    // const mapStateToProps = async (state, dispatch) => {
    // dispatch(requesting());
    // const response = await fetch('https://api.randomuser.me/');    
    // const data = await response.json();
    // const [item] = data.results;
    // await dispatch(requestDone(item));
    return {
        count: state.count,
        name: state.name,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrementAsync()),
        onReset: () => dispatch(reset()),
    };
};

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default () => {
    return <Provider store={store}>
        <CounterContainer />
    </Provider>
}