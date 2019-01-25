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
        <div className="App" style={{justifyContent: 'center', alignItems: 'center'}}>
            <p style={{fontSize: 100, color: 'orange'}} align="center">Google</p>
            <input
                style={{fontSize: 20, width: 700}}
                type={'text'}
                placeholder={'type your text here'}
                value={name}
                onChange={handlerNameChange}
            />
            <a href={''}>手气不错</a>
        </div>
    );
}
