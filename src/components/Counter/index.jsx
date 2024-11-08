import Button from '../Button'


//08-11 Colocado para o contador (Counter) aceite uma prop step que terá um valor 
export default function Counter(props){
    let counter = 0 + props.step

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
