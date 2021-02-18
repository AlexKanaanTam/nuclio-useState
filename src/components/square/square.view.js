import styles from './square.module.css';

const Square = ({ sqareId, activeSqare, activeSqare2 }) => {
  return (
    <div className={styles.container}>
        <p className={styles.number}>{sqareId}</p>
        <div className={styles.container_positions}>
            <div className={`${styles.position} ${sqareId === activeSqare && styles.active1}`}></div>
            <div className={`${styles.position} ${sqareId === activeSqare2 && styles.active2}`}></div>
        </div>
    </div>
  );
}

export default Square;
