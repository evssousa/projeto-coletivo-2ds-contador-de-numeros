import React, { useState } from 'react';

export default function Counter(){
    const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>


    </div>
  )
}
