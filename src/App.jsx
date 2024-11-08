import Counter from "./components/Counter"
import Button from "./components/Button"

export default function App() {
  return (
    <div className="container">
      <h1>Projeto iniciado!</h1>
      <Counter step={}/>
      <Button nameIncrement={'Incrementar'}/>
      <Button nameDecrement={'Decrementar'}/>
      <Button nameReset={'Resetar'}/>
    </div>
  )
}
