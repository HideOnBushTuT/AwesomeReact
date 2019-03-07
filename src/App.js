import React, { Component, useState, } from 'react';

import { observable, action } from "mobx";
// import Perf from 'react-addons-perf';
// import logo from './logo.svg';
import './App.css';
import InputWithoutHooks from './App/Hooks/InputWithoutHooks';
import InputWithHooks from './App/Hooks/InputWithHooks';
import Form from './App/Hooks/Form';
import TimerView from './App/Todos/Todo';
import Root from './App/Redux/Counter';
import ImmutableTest from './App/Immutable/Immutable';
import GeneratorBasic from './App/Generator/generator';
import TodoList from './App/MobX/TodoList';
import store from './App/MobX/TodoStore';

// window.Perf = Perf;

// var appState = observable({
//     timer: 0
// });

// appState.resetTimer = action(function reset() {
//     appState.timer = 0;
// });

// setInterval(action(function tick() {
//     appState.timer += 1;
// }), 1000);

const App = () => {
    // const [todos, setTodos] = useState([]);

    // const toggleComplete = i => {
    //     setTodos(todos.map((todo, k) =>
    //         k === i ? { ...todo, onComplete: !todo.onComplete } : todo
    //     ));
    // }

    return (
        // <Root />\
        <div>
            <div><ImmutableTest/></div>
            <div><Root/></div>
            {/* <div><TodoList store={store}/></div> */}
        </div>
        
        
        // <InputWithHooks initialcount={8} />
        // <TimerView appState={appState}/>
        // <div className='App'>
        //     <Form onSubmit={text => setTodos([{ text, onComplete: false }, ...todos])} />
        //     <div>
        //         {
        //             todos.map(({ text, onComplete }, i) => <div key={text + Math.random()} onClick={() => toggleComplete(i)}
        //              style={{ textDecoration: onComplete ? 'line-through' : '' }}>
        //                 {text}
        //             </div>)
        //         }
        //     </div>
        //     <button onClick={() => setTodos([])}>reset</button>
        // </div>
    );
};

// function App() {
//     const [name, setName] = useState('Mary');
//
//     return (
//         <div className="App">
//             <p>{name}</p>
//             <input
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={e => setName(e.target.value)}
//             />
//         </div>
//     );
// }
export default App;
