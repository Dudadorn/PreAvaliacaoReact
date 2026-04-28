
import { Route, Routes} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import um from './pages/Exercicioum'
import Exercicioum from './pages/Exercicioum'
import Exerciciodois from './pages/Exerciciodois'
import Exerciciotres from './pages/Exerciciotres'

function App() {

  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='Exercicioum' element={<Exercicioum/>} />
         <Route path='Exerciciodois' element={<Exerciciodois/>} />
          <Route path='Exerciciotres' element={<Exerciciotres/>} />
     </Routes>

     <Footer/>
    </>
  )
}

export default App