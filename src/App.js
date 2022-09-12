import { useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthPovider } from './Components/Context/AuthContext'
import MainDrawer from './Components/Herramientas/Drawer/MainDrawer'
import SecondDrawer from './Components/Herramientas/Drawer/SecondDrawer'
import ListaEquipos from './Components/Paginas/Privado/Equipos/ListaEquipos'
import ListaUsuarios from './Components/Paginas/Privado/Usuarios/ListaUsuarios'
import NuevoUsuario from './Components/Paginas/Privado/Usuarios/NuevoUsuario'
import Inicio from './Components/Paginas/Publico/Inicio'
import RecuperarPassword from './Components/Paginas/Publico/RecuperarPassword'
import Protected from './Components/Routes/Protected'
import Public from './Components/Routes/Public'

const App = () => {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('xs'))
  const userLogget = window.localStorage.getItem('login')
  return (
    <AuthPovider>
      <BrowserRouter>
        {userLogget
          ? isMatch
            ? <SecondDrawer />
            : <MainDrawer />
          : null
        }
        <Routes>
          <Route path='/' element={<Public />}>
            <Route index element={<Inicio />} />
            <Route path='/registro-usuario' element={<NuevoUsuario />} />
            <Route path='/password' element={<RecuperarPassword />} />
          </Route>
          <Route path='/private' element={<Protected />}>
            <Route index path='/private/usuarios' element={<ListaUsuarios />} />
            <Route path='/private/equipos' element={<ListaEquipos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthPovider>
  )
}

export default App
