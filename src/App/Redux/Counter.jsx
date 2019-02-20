import  React from "react";
import '../../App.css';
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { dispatch } from "rxjs/internal/observable/pairs";

const INCREMENT = "increment";
const DECREMENT = "decrement";

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

const CounterReducer = (state, action) =>{

    switch(action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT: 
            return state - 1;
        default:
            return state;
    }
}


const initValue = 0;
const store = createStore(CounterReducer, initValue, applyMiddleware(logger));

const Counter = ({count, onIncrement, onDecrement}) => {
    return (
        <div className='App'>
        <div>{count}</div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
    );
};

const mapStateToProps = (state) => {
    return {
        count: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement()),
    };
};

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default () => {
    return <Provider store={store}>
        <CounterContainer/>
    </Provider>
}