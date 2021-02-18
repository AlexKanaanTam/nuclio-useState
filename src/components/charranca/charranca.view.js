import { useState } from 'react';
import Square from '../square/square.view';
import styles from './charranca.module.css';

const Charranca = () => {
    const [activeSqare, setActiveSqare] = useState(1);
    const [activeSqare2, setActiveSqare2] = useState(1);
    const [currentTirada, setCurrentTirada] = useState(1);

    const getRandom = () => {
        return Math.floor(Math.random() * (6 - 1)) + 1;
    }

    const setTirada = (currentPosition) => {
        const random = getRandom();
        setCurrentTirada(random);
        if (random + currentPosition > 9) {
            return currentPosition;
        }
        return random + currentPosition;
    }

    const handleClickPlayer1 = () => {
        setActiveSqare(setTirada(activeSqare));
    }

    const handleClickPlayer2 = () => {
        setActiveSqare2(setTirada(activeSqare2));
    }

  return (
    <div className={styles.container}>
        <h1>Charranca</h1>
        <Square sqareId={9} activeSqare={activeSqare} activeSqare2={activeSqare2}/>
        <div className={styles.double_position}>
            <Square sqareId={7} activeSqare={activeSqare} activeSqare2={activeSqare2}/>
            <Square sqareId={8} activeSqare={activeSqare} activeSqare2={activeSqare2}/>    
        </div>
        <Square sqareId={6} activeSqare={activeSqare} activeSqare2={activeSqare2}/>
        <div className={styles.double_position}>
            <Square sqareId={4} activeSqare={activeSqare} activeSqare2={activeSqare2}/>
            <Square sqareId={5} activeSqare={activeSqare} activeSqare2={activeSqare2}/>    
        </div>
        <Square sqareId={3} activeSqare={activeSqare} activeSqare2={activeSqare2}/>
        <Square sqareId={2} activeSqare={activeSqare} activeSqare2={activeSqare2}/>
        <Square sqareId={1} activeSqare={activeSqare} activeSqare2={activeSqare2}/>

        <p><span className={styles.player1}>Player 1:</span> {activeSqare}</p>
        <p><span className={styles.player2}>Player 2:</span> {activeSqare2}</p>
        <input type="button" value="Player 1" onClick={handleClickPlayer1} />
        <input type="button" value="Player 2" onClick={handleClickPlayer2} />
        <p> Tirada: {currentTirada}</p>
    </div>
  );
}

export default Charranca;
