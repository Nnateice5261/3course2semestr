import React, {useEffect, useRef, useState} from 'react';
import styles from './calculator.module.css'
import {type} from "@testing-library/user-event/dist/type";
const Calculator = () => {
    let num1 = [];
    let refInput = useRef(null);
    let num2 = 0;
    let operator = '';
    const operation = (num) => {
        if (typeof num  === 'object') {
            num1 = Number(num1.join(''))
            refInput.current.value = eval(`${num2}${operator}${num1}`)
        }
        else if (typeof num === 'string' ){
            refInput.current.value = eval(num);
        }
        num2 = 0;
        operator = '';
        num1 = [];
    }
    const addNum = (num) => {
        num1.push(num);
        refInput.current.value = Number(num1.join(''));
    }
    const operationOneNum = () => {
        refInput.current.value = num1;
    }
    return (
        <div className={styles.main}>
            <div className={styles.upperBlock}>
                <input className={styles.UpperInput} ref={refInput} type='text' placeholder="Введите число" disabled></input>
            </div>
            <div className={styles.downBlock}>
                <button className={styles.unitOfGrid} onClick={() => {
                    let promp = prompt('Введи x,y:')
                    num1 = `Math.pow(${promp})`;
                    operationOneNum();
                }}>x^y</button>
                <button className={styles.unitOfGrid}>x!</button>
                <button className={styles.unitOfGrid} onClick={() => {
                    num1 = `-${num1}`;
                    operationOneNum();
                }}>+-</button>
                <button className={styles.unitOfGrid} onClick={() => {
                    num1 = []
                    num2 = 0;
                    refInput.current.value = '';
                }}>C</button>
                <button className={styles.unitOfGrid}>()</button>
                <button className={styles.unitOfGrid} onClick={() => {
                    operator = '%';
                    num2 = Number(num1.join(''));
                    num1 = [];
                }}>%</button>
                <button className={styles.unitOfGrid} onClick={() => {
                    operator = '/';
                    num2 = Number(num1.join(''));
                    num1 = [];
                }}>/</button>
                <button className={styles.unitOfGrid} onClick={() => {
                    num1 = `Math.asin(${num1})`;
                    operationOneNum();
                }}>asin</button>
                <button className={styles.unitOfGrid} onClick={() => {
                    num1 = `Math.sin(${num1})`;
                    operationOneNum();
                }}>sin</button>
                <button className={styles.unitOfGrid} onClick={() => {
                    num1 = `1/${num1}`;
                    operationOneNum();
                }}>1/x</button>
                <button className={styles.unitOfGrid} onClick={() => addNum(7)}>7</button>
                <button className={styles.unitOfGrid} onClick={() => addNum(8)}>8</button>
                <button className={styles.unitOfGrid} onClick={() => addNum(9)}>9</button>
                <button className={styles.unitOfGrid} onClick={() => {
                    operator = '*';
                    num2 = Number(num1.join(''));
                    num1 = [];
                }}>*</button>
                <button className={styles.unitOfGrid} onClick={() => {
                    num1 = `Math.acos(${num1})`;
                    operationOneNum();
                }}>acos</button>
                <button className={styles.unitOfGrid} onClick={() => {
                    num1 = `Math.cos(${num1})`;
                    operationOneNum();
                }}>cos</button>
                <button className={styles.unitOfGrid} onClick={() => {
                    num1 = `Math.sqrt(${num1})`;
                    operationOneNum();
                }}>sqrt</button>
                <button className={styles.unitOfGrid} onClick={() => addNum(4)}>4</button>
                <button className={styles.unitOfGrid} onClick={() => addNum(5)}>5</button>
                <button className={styles.unitOfGrid} onClick={() => addNum(6)}>6</button>
                <button className={styles.unitOfGrid} onClick={() => {
                    operator = '-';
                    num2 = Number(num1.join(''));
                    num1 = [];
                }}>-</button>
                <button className={styles.unitOfGrid} onClick={() => {
                    num1 = `Math.atan(${num1})`;
                    operationOneNum();
                }}>atan</button>
                <button className={styles.unitOfGrid} onClick={() => {
                    num1 = `Math.tan(${num1})`;
                    operationOneNum();
                }}>tan</button>
                <button className={styles.unitOfGrid} onClick={() => {
                    num1 = `Math.log(${num1})`;
                    operationOneNum();
                }}
                >ln</button>
                <button className={styles.unitOfGrid} onClick={() => addNum(1)}>1</button>
                <button className={styles.unitOfGrid} onClick={() => addNum(2)}>2</button>
                <button className={styles.unitOfGrid} onClick={() => addNum(3)}>3</button>
                <button className={styles.unitOfGrid} onClick={() => {
                    operator = '+';
                    num2 = Number(num1.join(''));
                    num1 = [];
                }}>+</button>
                <button className={styles.unitOfGrid} onClick={() => {
                    num1 = `Math.log10(${num1})`;
                    operationOneNum();
                }}>lg</button>
                <button className={styles.unitOfGrid} onClick={() => {
                    num1.push(Math.PI)
                    operationOneNum();
                }}>п</button>
                <button className={styles.unitOfGrid} onClick={() => {
                    num1.push(Math.E)
                    operationOneNum();
                }}>e</button>
                <button className={styles.unitOfGrid} onClick={() => addNum(0)}>0</button>
                <button className={styles.unitOfGrid}></button>
                <button className={styles.unitOfGrid}>.</button>
                <button className={styles.unitOfGrid} onClick={() => {
                    operation(num1);
                }}>=</button>
            </div>
        </div>
    )
        ;
};

export default Calculator;