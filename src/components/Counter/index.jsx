import Button from '../Button'

export default function Counter(){
    let counter = 0
    
    // função que verifica se o counter for menor que 0
    // se menor que 0, soma +1
  const count = () => {
    if (counter < 0) {
      setCounter(counter + step)
    } else {
      setCounter(counter + step)
    }
  }

  const decrement = () => {
    setCounter(counter - step);
  }

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={decrement}>- {step}</button>
      <button onClick={count}>+ {step}</button>
      <Button />
    </div>
  )
}

  const decrement = () => {
    setCounter(counter - step);
  }

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={decrement}>- {step}</button>
      <button onClick={count}>+ {step}</button>
      <Button />
    </div>
  )

