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

    return {person, loading};
}

export default () => {
    const [name, setName] = useState('Google');
    const [count, setCount] = useState(0);
    const {person, loading} = useFetch('https://api.randomuser.me/');

    useEffect(() => {
        document.title = '点击了' + count + '次';
    });

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
            {loading ? <div>loading...</div> : <div>{person.name.first}</div>}
        </div>
    );
}
