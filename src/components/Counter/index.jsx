import './styles.css'

let counterValue = 0
let previousValue = null  

function increment() {
    previousValue = counterValue;  
    counterValue += 1
    updateCounterDisplay()
}

function double() {
    previousValue = counterValue; 
    counterValue *= 2
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
    if (counterElement) {
        counterElement.textContent = `Valor: ${counterValue}`
        if (counterValue > 0) {
            counterElement.className = 'counter-value positive'
        } else {
            counterElement.className = 'counter-value negative'
        }
    } 
    document.title = `Contador: ${counterValue}`
}

export default function Counter() {
    return (
        <div className='counter-container'>
            <h1>Contador</h1>
            <p className='counter-value'>Valor: {counterValue}</p>

            <div className='buttons-container'>
                <button className='increment-button' onClick={increment}>Incrementar</button>
                <button className='double-button' onClick={double}>Dobrar</button>
                <button className='reverse-button' onClick={reverse}>Reversão</button>
                <button className='decrement-button' onClick={decrement}>Decrementar</button>
                <button className='reset-button' onClick={reset}>Resetar</button>
            </div>
        </div>
    )
}
