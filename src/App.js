import React, { useState } from 'react'

function Counter() {
 
  const [countValue, setCountValue] = useState(0);

  return (
    <div>
      <h3>Count: {countValue}</h3>

      <button onClick={()=>setCountValue(countValue-1)}>
          Decrement
        </button>

        <button onClick={()=>setCountValue(countValue+1)}>
          Increment
        </button>

    </div>
  )
}

export default Counter
