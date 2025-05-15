import styles from './main.module.css'
import {useRef, useState} from "react";

function App() {
    let [value, setValue] = useState(0);
    let ref1 = useRef(null);
    let ref2 = useRef(null);
    const addValue = () => {
        setValue(value + 1);
    }
    const minusValue = () => {
        setValue(value - 1);
    }
    
    return (
        <div style={{display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '30%', alignItems: 'center', border: '1px solid black', padding: '10px', backgroundColor: 'gray'}}>
            <h1>Привет, мир</h1>
            <h2>Привет, 1, 2 практика</h2>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th className={styles.table}>Игра</th>
                    <th className={styles.table}>Кол-во часов</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className={styles.table}>Dota 2</th>
                    <th className={styles.table}>Кол-во часов: 3500</th>
                </tr>
                <tr>
                    <th className={styles.table}>Counter Strike 2</th>
                    <th className={styles.table}>Кол-во часов: 1000</th>
                </tr>
                <tr>
                    <th className={styles.table}>Terraria</th>
                    <th className={styles.table}>Кол-во часов: 900</th>
                </tr>
                </tbody>
            </table>
                <main><h4>{`Ваш счет: ${value}`}</h4></main>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button style={{width: '100px', height: '50px'}} ref={ref1} onClick={addValue}>+1</button>
                <button style={{width: '100px', height: '50px'}} ref={ref2} onClick={minusValue}>-1</button>
            </div>
            </div>
        </div>
    )
}

export default App