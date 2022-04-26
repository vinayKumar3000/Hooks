import React from 'react';
import './App.css';
import Example from './Example';
import Counter from './Counter';
import { useEffect,useState,useRef } from 'react';

function App() {
  const [appcount, setappCount] = useState(0);
  const prevCount=useRef()
  console.log("App");

  useEffect(() => {
    prevCount.current=appcount;
    document.title = `You clicked ${appcount} times`;
    console.log("app use effect");
   console.log(prevCount.current);
   return () => {
     console.log("app clean up ")
   }
},[appcount]);
  return (
    <div className="App">
       
        <p>You clicked app-{appcount} times</p>
        <p> prev count {prevCount.current}</p>
        <button onClick={() => setappCount(appcount + 1)}>
           app- Click me
        </button>
        <Example />
        <Counter />
    </div>
  );
}

export default App;
