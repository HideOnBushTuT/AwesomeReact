import React, { useEffect } from "react";
import '../../App.css';
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from 'redux-saga';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { watchIncrementAsync } from '../saga/HelloSaga';

import { logger } from "redux-logger";
import { createSelector } from "reselect";
import thunk from 'redux-thunk';
import { request } from "http";

export const INCREMENT = "increment";
export const INCREMENT_ASYNC = "increment-async";
const DECREMENT = "decrement";
const RESET = "reset";
const REQUEST = 'requesting';
const REQEUST_DONE = 'request_done';
export const FETCH_NAME = 'fetch_name';
export const FETCH_SUCCESS = 'fetch_success';
export const FETCH_FAIL = 'fetch_fail';

export const increment = () => {
    return {
        type: INCREMENT,
    };
};

export const incrementAsync = () => {
    return {
        type: INCREMENT_ASYNC,
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

export const fetchName = () => {
    return {
        type: FETCH_NAME,
    };
};

export const fetchSuccess = (data) => {
    return {
        type: FETCH_SUCCESS,
        data,
    };
};

export const fetchFail = (error) => {
    return {
        type: FETCH_FAIL,
        error,
    };
};

// const fetchName = (url) => {
//     return async dispatch => {
//         await dispatch(requesting());
//         const response = await fetch(url);
//         const data = await response.json();
//         const [item] = data.results;
//         dispatch(requestDone(item));
//     };

// };

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


const initValue = 0;
const CounterReducer = (state = { count: 0 }, action) => {

    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        case RESET:
            return { ...state, count: initValue};
        case INCREMENT_ASYNC:
            return state;
        default:
            return { ...state, count: 0 };
    }
}

const fetchReducer = (state = { name: 'caibi' }, action) => {
    switch (action.type) {
        case FETCH_NAME:
            return state;
        case FETCH_SUCCESS:
            return { ...state, name: action.data };
        case FETCH_FAIL:
            return { ...state, name: 'error'};
        default:
            return { ...state, name: 'caibi' };
    }
}
const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    counter: CounterReducer, 
    fetch: fetchReducer
});

const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware, thunk, ));

// then run the saga
sagaMiddleware.run(watchIncrementAsync);
// sagaMiddleware.run(incrementAsyncSaga);

const Counter = ({ count, name, onIncrement, onDecrement, onReset, onIncrementSaync, fetchName }) => {
    useEffect(() => {
        document.title = count;
    });

    console.log('Counter Component rerendered !')
    return (
        <div className='App'>
            <div><a>{name}</a></div>
            <div>{count}</div>
            <button onClick={onIncrement}>+</button>
            <button onClick={onIncrementSaync}>+ Async</button>
            <button onClick={onDecrement}>-</button>
            <button onClick={onReset}>reset</button>
            <br />
            <button onClick={fetchName}>fetch name</button>
        </div>
    );
};

// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//         let value = this.props.count !== nextProps.count || this.props.name !== nextProps.name;
//         console.log('shouldComponentUpdate:', value);
//         return value;
//     }

//     render() {
//         console.log('Counter Component rerendered !')
//         return (
//             <div className='App'>
//                 <div><a>{this.props.name}</a></div>
//                 <div>{this.props.count}</div>
//                 <button onClick={this.props.onIncrement}>+</button>
//                 <button onClick={this.props.onIncrementSaync}>+ Async</button>
//                 <button onClick={this.props.onDecrement}>-</button>
//                 <button onClick={this.props.onReset}>reset</button>
//             </div>
//         );
//     }
// }

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
        count: state.counter.count,
        name: state.fetch.name,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onIncrementSaync: () => dispatch(incrementAsync()),
        onDecrement: () => dispatch(decrementAsync()),
        onReset: () => dispatch(reset()),
        fetchName: () => dispatch(fetchName()),
    };
};

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default () => {
    return <Provider store={store}>
        <CounterContainer />
    </Provider>
}