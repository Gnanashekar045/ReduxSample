import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function UserInfo() {
  const dispatch = useDispatch();
  const { name, age } = useSelector((state) => state.user);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Redux Basic App</h2>

      <input
        placeholder="Enter Name"
        onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
      />
      <br /><br />
      <input
        placeholder="Enter Age"
        type="number"
        onChange={(e) => dispatch({ type: 'SET_AGE', payload: parseInt(e.target.value) })}
      />
      <br /><br />

      <h3>User Info:</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default UserInfo;
