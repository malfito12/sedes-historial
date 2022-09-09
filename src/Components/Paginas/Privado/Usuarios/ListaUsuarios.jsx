import { AppBar, Button, Container, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useNavigate } from 'react-router-dom';

const ListaUsuarios = () => {
  const navigation=useNavigate()
  const [user, setUser] = useState([])

  useEffect(() => {
    getUser()
  }, [])

  //------GET USUARIOS-----------
  const getUser = async () => {
    await axios.get('https://jsonplaceholder.typicode.com/users')
      .then(resp => {
        setUser(resp.data)
      })
      .catch(err => console.log(err))
  }
  console.log(user)

  const data = [
    { nombre: 'Maria', apellidoP: 'Mecedes', apellidoM: 'Arce', email: 'maria123@gmail.com' },
    { nombre: '', apellidoP: 'Mecedes', apellidoM: 'Arce', email: 'maria123@gmail.com' },
    { nombre: 'Maria', apellidoP: 'Mecedes', apellidoM: 'Arce', email: 'maria123@gmail.com' },
    { nombre: 'Maria', apellidoP: 'Mecedes', apellidoM: 'Arce', email: 'maria123@gmail.com' },
    { nombre: 'Maria', apellidoP: 'Mecedes', apellidoM: 'Arce', email: 'maria123@gmail.com' },
    { nombre: 'Maria', apellidoP: 'Mecedes', apellidoM: 'Arce', email: 'maria123@gmail.com' },
    { nombre: 'Maria', apellidoP: 'Mecedes', apellidoM: 'Arce', email: 'maria123@gmail.com' },
    { nombre: 'Maria', apellidoP: 'Mecedes', apellidoM: 'Arce', email: 'maria123@gmail.com' },
  ]
  return (
    <>
      <AppBar position='absolute'>
        <Toolbar>
          <div style={{flexGrow:1}}></div>
          <Button onClick={()=>navigation('/')}  style={{ color: 'white'}}>Cerrar Sesion</Button>
        </Toolbar>
      </AppBar>
      <Container fixed style={{ marginTop: 100 }}>
        <Typography variant='h5' align='center'>Lista de Usuarios</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Usuario</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Correo Electronico</TableCell>
                <TableCell>Cuidad</TableCell>
                <TableCell>Telefono</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user ? (
                user.map((e, index) => (
                  <TableRow key={index}>
                    <TableCell>{e.username}</TableCell>
                    <TableCell>{e.name}</TableCell>
                    <TableCell>{e.email}</TableCell>
                    <TableCell>{e.address.city}</TableCell>
                    <TableCell>{e.phone}</TableCell>
                    <TableCell>
                      <Grid container direction='row' justifyContent='space-evenly'>
                        <IconButton size='small' style={{ color: 'green' }}>
                          <EditIcon />
                        </IconButton>
                        <IconButton size='small' style={{ color: 'red' }}>
                          <DeleteIcon />
                        </IconButton>
                      </Grid>
                    </TableCell>
                  </TableRow>
                ))
              ) : (null)}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  )
}

export default ListaUsuarios