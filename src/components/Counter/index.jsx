import './styles.css'

let counterValue = 0
let previousValue = null  

function increment() {
    previousValue = counterValue;  
    counterValue += 1
    updateCounterDisplay()
}
function addincrement() {
    previousValue = counterValue;
    counterValue += 5
    updateCounterDisplay()
}

function double() {
    previousValue = counterValue; 
    counterValue *= 2
    updateCounterDisplay()
}

function mult() {
    previousValue = counterValue;
    counterValue *= 10
    updateCounterDisplay()
}

function divide() {
    previousValue = counterValue;
    counterValue /= 10
    updateCounterDisplay()
}

function decrement() {
    if (counterValue > 0) {
        previousValue = counterValue;
        counterValue -= 1
    }
    updateCounterDisplay()
}

function reset() {
    previousValue = counterValue;
    counterValue = 0
    updateCounterDisplay()
}

function reverse() {
    if (previousValue !== null) {  
        counterValue = previousValue
        updateCounterDisplay()
    }
}

function updateCounterDisplay() {
    const counterElement = document.querySelector('.counter-value')
    const counterTitle = document.querySelector('.counter-title')
    if (counterElement) {
        counterElement.textContent = `Valor: ${counterValue}`
        if (counterValue > 0) {
            counterElement.className = 'counter-value positive'
        } else {
            counterElement.className = 'counter-value negative'
        }

        if (counterValue === 0) {
             counterTitle.className = 'counter-title neutral'
        } else if (counterValue > 0) {
             counterTitle.className = 'counter-title positive'
        }
        else {
            counterTitle.className = 'counter-title negative'
        }
    } 
    document.title = `Contador: ${counterValue}`
}

export default function Counter() {
    return (
        <div className='counter-container'>
            <h1 className='counter-title'>Contador</h1>
            <p className='counter-value'>Valor: {counterValue}</p>

            <div className='buttons-container'>
                <button className='increment-button' onClick={increment}>Incrementar</button>
                <button className='fixoincrement-button' onClick={addincrement}>adicionar +5</button>
                <button className='double-button' onClick={double}>Dobrar</button>
                <button className='mult-button' onClick={mult}>Multiplicar x10</button>
                <button className='divide-button' onClick={divide}>Dividir ÷10</button>
                <button className='reverse-button' onClick={reverse}>Reversão</button>
                <button className='decrement-button' onClick={decrement}>Decrementar</button>
                <button className='reset-button' onClick={reset}>Resetar</button>
            </div>
        </div>
    )
}
