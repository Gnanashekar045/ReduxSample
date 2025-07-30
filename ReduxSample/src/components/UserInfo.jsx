import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function UserInfo() {
  const dispatch = useDispatch();
  const { name, age } = useSelector((state) => state.user);

  const [tempName, setTempName] = useState('');
  const [tempAge, setTempAge] = useState('');

  const handleSubmit = () => {
    dispatch({ type: 'SET_NAME', payload: tempName });
    dispatch({ type: 'SET_AGE', payload: parseInt(tempAge) });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Redux Basic App</h2>

      <input
        placeholder="Enter Name"
        value={tempName}
        onChange={(e) => setTempName(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Enter Age"
        type="number"
        value={tempAge}
        onChange={(e) => setTempAge(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSubmit}>Submit</button>
      <br /><br />

      <h3>User Info:</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default UserInfo;
