import { useState } from 'react';
import './style.css';

function Exerciciodois() {

    const [ N1, setN1 ]  = useState("")
     const [ N2, setN2 ]  = useState("")
      const [ Resultado, setResultado ] = useState()

      function handleSubmit(event) {
           event.preventDefault();
           console.log(Number(N1) * Number(N2))
           setResultado(Number(N1) * Number(N2));
      }
    return (
        <>
            <h2>Soma de dois numeros</h2>

            <form onSubmit={handleSubmit}>
            <label >Quanto voce ganha por hora?</label>
            <input 
              type="Number"
              value={N1}
              onChange={ (event) => setN1(event.target.value) }
            />
            <label >Quantas horas voce trabalha por mes?</label>
            <input 
              type="Number"
              value={N2}
              onChange={ (e) => setN2(e.target.value) }
            />

            <p>{Resultado}</p>
            
            <button type="number">Resultado</button>
            </form>

             
  
      
        </>
    )
}
export default Exerciciodois 