import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ListaUsuarios from '../Usuarios/ListaUsuarios'


const ListaEquipos = () => {
  const [equipo, setEquipo] = useState([])

  useEffect(() => {
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    // axios.get(`https://jsonplaceholder.typicode.com/users`)
    // .then(respuesta=>setEquipo(respuesta.data))
    // .catch(err=>console.log(err))
    setEquipo(data)
  }
  const data = [
    { nombre: 'Impresora LEPSON', fecha: '20/06/2022', descipcion: 'Normal', tipo: 'Electrico', codigo: 'A-100' },
    { nombre: 'Pantalla LG', fecha: '20/06/2022', descipcion: 'Complcado', tipo: 'Electrico', codigo: 'A-101' },
    { nombre: 'CPU', fecha: '20/06/2022', descipcion: 'Normal', tipo: 'Electrico', codigo: 'A-102' },
    { nombre: 'Teclado', fecha: '20/06/2022', descipcion: 'Facil', tipo: 'Electrico', codigo: 'A-103' },
  ]

  // console.log(equipo)
  return (
    <>
      <Typography align='center' variant='h4'>Lista de Equipos en Matenimiento</Typography>
      <Container style={{ marginLeft: 240 }}>
        <TableContainer>
          <Table border={3}>
            <TableHead>
              <TableRow>
                <TableCell style={{ background: 'black', color: 'white' }}>N°</TableCell>
                <TableCell style={{ background: 'black', color: 'white' }}>Nombre</TableCell>
                <TableCell style={{ background: 'black', color: 'white' }}>fecha</TableCell>
                <TableCell style={{ background: 'black', color: 'white' }}>Description</TableCell>
                <TableCell style={{ background: 'black', color: 'white' }}>Tipo</TableCell>
                <TableCell style={{ background: 'black', color: 'white' }}>Codigo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                equipo.map((e, index) => (
                  <TableRow key={index}>
                    <TableCell>{index}</TableCell>
                    <TableCell>{e.nombre}</TableCell>
                    <TableCell>{e.fecha}</TableCell>
                    <TableCell>{e.descipcion}</TableCell>
                    <TableCell>{e.tipo}</TableCell>
                    <TableCell>{e.codigo}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  )
}

export default ListaEquipos