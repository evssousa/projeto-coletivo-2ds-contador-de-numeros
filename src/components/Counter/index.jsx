import Button from './Button'

export default function Counter() {
  const [counter, setCounter] = useState(0)
  const step = 1

  const increment = () => {
    setCounter(counter + step)
  };

  const decrement = () => {
    setCounter(counter - step)
  };

  const reset = () => {
    setCounter(0)
  }

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={decrement}>- {step}</button>
      <button onClick={increment}>+ {step}</button>
      <Button onClick={reset} nameReset={"Resetar"} /> {}
    </div>
  )
}