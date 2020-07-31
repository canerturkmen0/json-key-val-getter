import React, { useRef } from 'react';

import './form.css';

const Form = ({ handleSubmit }) => {

    const inputRef = useRef(null);

    return (
        <form onSubmit={e => handleSubmit(e, inputRef.current.value)}>
            <input
                className="form-input form-input-text"
                ref={inputRef}
                type="text"
                placeholder="Key Input" />
            <input
                className="form-input form-input-button"
                type="submit"
                value="Run"
            />
        </form>
    )
}

export default Form;