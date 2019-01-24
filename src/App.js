import React, {Component, useState} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Hooks from "./App/Hooks";

// import Hooks from './App/Hooks';
// import InputWithoutHooks from './App/Hooks/InputWithoutHooks';
import InputWithHooks from './App/Hooks/InputWithHooks';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<InputWithoutHooks/>*/}
                <InputWithHooks/>
            </div>
        );
    }
}

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
