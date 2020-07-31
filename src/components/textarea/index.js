import React from 'react';

import './textarea.css';

const TextArea = ({ handleTextAreaChange, jsonKeyVal }) => (
    <div className="textarea-container">
        <textarea value={jsonKeyVal} onChange={handleTextAreaChange} />
    </div>
);

export default TextArea;