import React, { useState } from 'react';

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
    const [name, setName] = useState('Mary');

    function handlerNameChange(e) {
        setName(e.target.value);
    }

    return (
        <div className="App">
            <p>{name}</p>
            <input
                value={name}
                onChange={handlerNameChange}
            />
        </div>
    );
}
