import './styles.css'

let counterValue = 0
let previousValue = null  

function increment() {
    if (counterValue < 1000) {
        previousValue = counterValue;  
        counterValue += 1
        updateCounterDisplay()
    } else {
        alert("Você atingiu o limite de 1000!");
    }
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
        updateCounterDisplay()
    }
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

function sub(){
    if (counterValue > 0) {
        previousValue = counterValue;
        counterValue -= 3
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

    const incrementButton = document.querySelector('.increment-button');
    if (incrementButton) {
        incrementButton.disabled = counterValue >= 1000;
    }
}

export default function Counter() {
    return (
        <div className='counter-container'>
            <h1 className='counter-title'>Contador</h1>
            <p className='counter-value'>Valor: {counterValue}</p>

            <div className='buttons-container'>
                <button className='increment-button' onClick={increment}>Incrementar</button>
                <button className='fixoincrement-button' onClick={addincrement}>Adicionar +5</button>
                <button className='double-button' onClick={double}>Dobrar</button>
                <button className='mult-button' onClick={mult}>Multiplicar x10</button>
                <button className="sub-button" onClick={sub}>Subtrair</button>
                <button className='divide-button' onClick={divide}>Dividir ÷10</button>
                <button className='reverse-button' onClick={reverse}>Reversão</button>
                <button className='decrement-button' onClick={decrement}>Decrementar</button>
                <button className='reset-button' onClick={reset}>Resetar</button>
            </div>
        </div>
    )
}
