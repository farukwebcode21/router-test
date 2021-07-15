import React, {useState, useEffect} from 'react';

const Header = () => {
    const [count, setCount] = useState(0);

  useEffect(() => { 
      document.title = `You clicked ${count} times`; 
     });
     
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    );
};

export default Header;