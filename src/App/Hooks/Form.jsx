import React, { useState } from 'react';

const useValue = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    return {
        value: value,
        placeholder: 'text here',
        onChange: e => setValue(e.target.value),
    };
};

export default ({ onSubmit }) => {
    const text = useValue('');

    return <form onSubmit={e => {
        e.preventDefault();
        onSubmit(text.value);
    }}>
        <input {...text} />
    </form>
}