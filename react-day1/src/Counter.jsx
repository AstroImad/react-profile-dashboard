import { useState } from 'react';

export default function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div style={{ border: "1px solid #ddd", padding: "20px", marginTop: "20px" }}>
          <h3>Count: {count}</h3>

          {/* 2. Update state based on current value */}
            <button onClick={() => setCount(count + 1)}> +1 </button>
            <button onClick={() => setCount(count - 1)}> -1 </button>          
        </div>
    );
}