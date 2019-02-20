import React, { useState, useEffect, useLayoutEffect, useReducer, useMemo } from 'react';
import { AsyncSeriesWaterfallHook } from 'tapable';

// export default function InputWithHooks() {
//     const [name, setName] = useState('Mary');
//
//     function handlerNameChange(e) {
//         setName(e.target.value);
//     }
//
//     return (
//         <div className="App">
//             <p>{name}</p>
//             <input
//                 value={name}
//                 onChange={handlerNameChange}
//             />
//         </div>
//     );
// }

const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case 'reset':
            return { count: action.payload };
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            return state;
    }
}

const useFetch = (url) => {
    const [person, setPerson] = useState(null);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     document.title = `You Click ${count} times`;
    // }, [count]);

    useEffect(async () => {
        const response = await fetch(url);
        const data = await response.json();
        const [item] = data.results;
        setPerson(item);
        setLoading(false);
    }, []);

    return { person, loading };
}

const names = ({ name }) => {
    const nameView = useMemo(() => <div>{name}</div>, [name]);
    return <div>
        {nameView}
    </div>
}

export default ({ initialcount }) => {
    const [name, setName] = useState('Google');
    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState, { type: 'reset', payload: initialcount });
    const { person, loading } = useFetch('https://api.randomuser.me/');

    useEffect(() => {
        document.title = 'React ' + state.count;
    });

    // useLayoutEffect(() => {
    //     setCount(count + 1);
    // });

    return (
        <div className="App" style={{ justifyContent: 'center', alignItems: 'center' }}>
            <p style={{ fontSize: 100, color: 'orange' }} align="center">{name} {state.count}</p>
            <input
                style={{ fontSize: 20, width: 700 }}
                type={'text'}
                placeholder={'type your text here'}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset', payload: 100 })}>reset</button>
            {/* {loading ? <div>loading...</div> : <div>{person.name.first}</div>} */}
            {names({ name: loading ? 'loading...' : person.name.first })}
        </div>
    );
}
