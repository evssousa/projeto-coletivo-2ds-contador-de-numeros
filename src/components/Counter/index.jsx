import { useEffect } from 'react';
import './styles.css';

let counterValue = 0;
let previousValue = null;

const MAX_COUNTER_VALUE = 1000;

function increment() {
    if (counterValue < MAX_COUNTER_VALUE) {
        previousValue = counterValue;
        counterValue += 1;
        updateCounterDisplay();
    }
    checkButtonState();
}

function addincrement() {
    if (counterValue + 5 <= MAX_COUNTER_VALUE) {
        previousValue = counterValue;
        counterValue += 5;
        updateCounterDisplay();
    } else {
        counterValue = MAX_COUNTER_VALUE;
        updateCounterDisplay();
    }
    checkButtonState();
}

function double() {
    if (counterValue * 2 <= MAX_COUNTER_VALUE) {
        previousValue = counterValue;
        counterValue *= 2;
        updateCounterDisplay();
    } else {
        counterValue = MAX_COUNTER_VALUE;
        updateCounterDisplay();
    }
    checkButtonState();
}

function mult() {
    if (counterValue * 10 <= MAX_COUNTER_VALUE) {
        previousValue = counterValue;
        counterValue *= 10;
        updateCounterDisplay();
    } else {
        counterValue = MAX_COUNTER_VALUE;
        updateCounterDisplay();
    }
    checkButtonState();
}

function divide() {
    previousValue = counterValue;
    counterValue /= 10;
    updateCounterDisplay();
    checkButtonState();
}

function decrement() {
    if (counterValue > 0) {
        previousValue = counterValue;
        counterValue -= 1;
    }
    updateCounterDisplay();
    checkButtonState();
}

function reset() {
    previousValue = counterValue;
    counterValue = 0;
    updateCounterDisplay();
    checkButtonState();
}

function reverse() {
    if (previousValue !== null) {
        counterValue = previousValue;
        updateCounterDisplay();
    }
    checkButtonState();
}

function sub() {
    previousValue = counterValue;
    counterValue -= 3;
    if (counterValue < 0) counterValue = 0;
    updateCounterDisplay();
    checkButtonState();
}

function updateCounterDisplay() {
    const counterElement = document.querySelector('.counter-value');
    const counterTitle = document.querySelector('.counter-title');
    if (counterElement) {
        counterElement.textContent = `Valor: ${counterValue}`;
        if (counterValue > 0) {
            counterElement.className = 'counter-value positive';
        } else {
            counterElement.className = 'counter-value negative';
        }

        if (counterValue === 0) {
            counterTitle.className = 'counter-title neutral';
        } else if (counterValue > 0) {
            counterTitle.className = 'counter-title positive';
        } else {
            counterTitle.className = 'counter-title negative';
        }
    }
    document.title = `Contador: ${counterValue}`;
}

function checkButtonState() {
    const incrementBtns = document.querySelectorAll('.increment-button, .fixoincrement-button, .double-button, .mult-button');

    incrementBtns.forEach((btn) => {
        btn.disabled = counterValue >= MAX_COUNTER_VALUE;
    });

    const decrementBtn = document.querySelector('.decrement-button');
    decrementBtn.disabled = counterValue <= 0;
}

export default function Counter() {
    useEffect(() => {
        checkButtonState();
    }, []); // Garante que será chamado apenas após a montagem inicial do componente.

    return (
        <div className='counter-container'>
            <h1 className='counter-title'>Contador</h1>
            <p className='counter-value'>Valor: {counterValue}</p>

            <div className='buttons-container'>
                <button className='increment-button' onClick={increment}>Incrementar</button>
                <button className='fixoincrement-button' onClick={addincrement}>Adicionar +5</button>
                <button className='double-button' onClick={double}>Dobrar</button>
                <button className='mult-button' onClick={mult}>Multiplicar x10</button>
                <button className='sub-button' onClick={sub}>Subtrair</button>
                <button className='divide-button' onClick={divide}>Dividir ÷10</button>
                <button className='reverse-button' onClick={reverse}>Reversão</button>
                <button className='decrement-button' onClick={decrement}>Decrementar</button>
                <button className='reset-button' onClick={reset}>Resetar</button>
            </div>
        </div>
    );
}
