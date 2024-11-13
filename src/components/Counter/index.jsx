import Button from '../Button'

let countInit = 0

const count = () => {
  if (countInit < 0) {
    return countInit++
  }
}

export default function Counter() {
  return (
    <div>
      <h1>Counter: {countInit}</h1>
      <Button>Incrementar</Button>
      <Button>Decrementar</Button>
      <Button>Reset</Button>
    </div>
  )
}