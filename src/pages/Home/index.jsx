import { Link } from 'react-router-dom';
import './style.css';

function Home() {
  return (
    <>
       <h2>Bem vindo ao meu sistema</h2>
       <Link to="/Exercicioum">
        <button>Exercicio 1</button>
       </Link>

        <Link to="/Exerciciodois">
        <button>Exercicio 2</button>
       </Link>
      
    </>
  )
}

export default Home