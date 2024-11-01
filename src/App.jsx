import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom"

import { HomePage } from './Pages/HomePage';
import { Productw } from './components/Productw';

function App() {
  return (

    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/tovar/:id' element={<Productw/>} />
    </Routes>
  )
}

export default App
