import React from 'react';

import { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);
    console.log("Example")

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
        console.log("Example use effect")
        return () => {
            console.log("Example cleanup")
        }
    },[count]);

    return (
        <div>
        
        <p>You clicked example {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            example-Click me
        </button>
        </div>
    );
}

export default Example;