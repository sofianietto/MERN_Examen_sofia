
import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import ListaMascotas from './views/ListaMascotas'
import DetalleMascotas from './views/DetalleMascotas'
import AddMascotas from './views/AddMascotas'
import EditarMascota  from './views/EditarMascota'


function App() {
  return (
    <>
        <div className='container mt-3'>
            <Routes>
                <Route path="/" element={<ListaMascotas />} />
                <Route path="/:id" element={<DetalleMascotas />} />
                <Route path="/new" element={<AddMascotas />} />
                <Route path="/:id/update" element={<EditarMascota />} />
                
            </Routes>
        </div>
    </>
  )
}

export default App
