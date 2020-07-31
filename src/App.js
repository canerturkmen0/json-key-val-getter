import React, { useState } from 'react';

import './normalize.css';
import './App.css';
import data from './pet3.json';
import Form from './components/form';
import TextArea from './components/textarea';

function App() {
  const [jsonKeyVal, setJsonKeyVal] = useState();

  const handleSubmit = (e, val) => {
    e.preventDefault();
    const inputValArr = val.split('.');
    const nestedKeyVal = inputValArr.reduce((nestedVal, currentKey) => nestedVal[currentKey], data);
    nestedKeyVal ? setJsonKeyVal(JSON.stringify(nestedKeyVal, null, 4)) : setJsonKeyVal('No Data');
  }

  const handleTextAreaChange = e => {
    setJsonKeyVal(e.target.value);
  }

  return (
    <div className="App">
      <Form handleSubmit={handleSubmit} />
      <TextArea
        handleTextAreaChange={handleTextAreaChange}
        jsonKeyVal={jsonKeyVal}
      />
    </div>
  );
}

export default App;
