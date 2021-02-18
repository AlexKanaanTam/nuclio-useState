import styles from './counter.module.css';
import React, { useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  
  return (
    <div className={styles.counter}>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <input type="button" value="Increment" onClick={increment} />
    </div>
  );
}

export default Counter;
