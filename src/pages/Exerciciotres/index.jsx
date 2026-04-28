import { useState } from 'react';
import './style.css';

function Exerciciotres() {

    const [ N1, setN1 ]  = useState("")
     const [ N2, setN2 ]  = useState("")
      const [ Resultado, setResultado ] = useState()

      function handleSubmit(event) {
           event.preventDefault();
           console.log(Number(N1) + Number(N2) + Number(N3))
           setResultado(Number(N1) + Number(N2) + Number(N3));
      }
    return (
        <>
            <h2>Soma de dois numeros</h2>

            <form onSubmit={handleSubmit}>
            <label >Digite o peso de 1 pessoa</label>
            <input 
              type="Number"
              value={N1}
              onChange={ (event) => setN1(event.target.value) }
            />
            <form onSubmit={handleSubmit}></form>
            <label >Digite o peso de uma 2 pessoa</label>
            <input 
              type="Number"
              value={N2}
              onChange={ (e) => setN2(e.target.value) }
            />
            <form onSubmit={handleSubmit}></form>
            <label> Digite o peso de uma 3 pessoa </label>
            <input 
              type="Number"
              value={N3}
              onChange={ (e) => setN3(e.target.value) }
            />

            <p>{Resultado}</p>
            
            <button type="number">Resultado</button>
            </form>

             
  
      
        </>
    )
}
export default Exerciciotres