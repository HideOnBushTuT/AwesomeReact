import React, { useState, useEffect } from 'react';

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

export default () => {
    const [name, setName] = useState('Google');
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You Click ${count} times`;
    }, []);

    return (
        <div className="App" style={{justifyContent: 'center', alignItems: 'center'}}>
            <p style={{fontSize: 100, color: 'orange'}} align="center">{name} {count}</p>
            <input
                style={{fontSize: 20, width: 700}}
                type={'text'}
                placeholder={'type your text here'}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => setCount(count + 1)}>Ckick Me To Plus One</button>
        </div>
    );
}
