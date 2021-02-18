import styles from './password.module.css';
import React, { useState } from 'react';

const SAMPLE_PASSWORD = '123456789';

const Password = () => {

  const [password, setPassword] = useState('');

  const handleChange = e => {
    setPassword(e.target.value);
  }




  return (
    <div className={styles.password_container}>
      <h1>Password controller</h1>
      <label>Password</label>
      <input type="password" value={password} onChange={handleChange} />
      <p>{password}</p>
      <p>{password === SAMPLE_PASSWORD ? 'Correct' : ''}</p>
    </div>
  );
}

export default Password;
