import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListaEquipos from './Components/Paginas/Privado/Equipos/ListaEquipos'
import ListaUsuarios from './Components/Paginas/Privado/Usuarios/ListaUsuarios'
import NuevoUsuario from './Components/Paginas/Privado/Usuarios/NuevoUsuario'
import Inicio from './Components/Paginas/Publico/Inicio'
import RecuperarPassword from './Components/Paginas/Publico/RecuperarPassword'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/usuarios' element={<ListaUsuarios />} />
        <Route path='/equipos' element={<ListaEquipos />} />
        <Route path='/registro-usuario' element={<NuevoUsuario />} />
        <Route path='/password' element={<RecuperarPassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
