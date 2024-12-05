import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
      <h2>Counter: {count}</h2>
      <div>
        <button 
          onClick={() => setCount(prevCount => prevCount + 1)} // Use function form to get the updated count
          style={{ margin: '5px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(prevCount => prevCount - 1)} // Use function form to get the updated count
          style={{ margin: '5px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Decrement
        </button>
        <button 
          onClick={() => setCount(0)} 
          style={{ margin: '5px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
