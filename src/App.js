import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import InputWithoutHooks from './App/Hooks/InputWithoutHooks';
import InputWithHooks from './App/Hooks/InputWithHooks';

class App extends Component {
    render() {
        return (
            <InputWithHooks/>
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
