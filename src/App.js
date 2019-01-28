import React, { Component, useState } from 'react';
// import logo from './logo.svg';
import './App.css';

import InputWithoutHooks from './App/Hooks/InputWithoutHooks';
import InputWithHooks from './App/Hooks/InputWithHooks';
import Form from './App/Hooks/Form';

const App = () => {
    const [todos, setTodos] = useState([]);

    return (
        // <InputWithHooks/>
        <div className='App'>
            <Form onSubmit={text => setTodos([{ text, onComplete: false }, ...todos])} />
            <div>
                {
                    todos.map(({ text }) => <div key={text + Math.random()}>{text}</div>)
                }
            </div>
        </div>
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
