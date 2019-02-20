import  React from "react";
import '../../App.css';
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { createSelector } from "reselect";

const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset"

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

const reset = () => {
    return {
        type: RESET,
    };
};

const initValue = 0;
const CounterReducer = (state, action) =>{

    switch(action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT: 
            return state - 1;
        case RESET:
            return initValue;
        default:
            return state;
    }
}

const store = createStore(CounterReducer, initValue, applyMiddleware(logger));

const Counter = ({count, onIncrement, onDecrement, onReset}) => {
    return (
        <div className='App'>
        <div>{count}</div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={onReset}>reset</button>
    </div>
    );
};

const calculatorCount = (state) => state;

const getCount = createSelector([calculatorCount], (state) => {
    return state;
});

const mapStateToProps = (state) => {
    return {
        count: getCount(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement()),
        onReset: () => dispatch(reset()),
    };
};

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default () => {
    return <Provider store={store}>
        <CounterContainer/>
    </Provider>
}