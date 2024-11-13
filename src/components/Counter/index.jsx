import Button from '../Button'

export default function Counter(){
    let counter = 0
    
    // função que verifica se o counter for menor que 0
    // se menor que 0, soma +1
    const count = () => {
      if (counter < 0) {
        return counter++
      }
    }
    
    return (     
      <div>
        <p>Counter: {counter}</p>
        <Button/>
      </div>
    )
  }