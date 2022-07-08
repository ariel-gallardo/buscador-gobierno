import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Lista from './Lista'
import Navegacion from './Navegacion'
import Guardado from './Guardado'
import { ListaProvider } from './ListaContext'

const App = () => {

  return (
    <BrowserRouter>
      <ListaProvider>
        <Navegacion/>
        <Routes>
          <Route exact path='/' element={<Lista/>}/>
          <Route exact path='/guardado' element={<Guardado/>}/>
        </Routes>
      </ListaProvider>
    </BrowserRouter>
    
  )
}

export default App