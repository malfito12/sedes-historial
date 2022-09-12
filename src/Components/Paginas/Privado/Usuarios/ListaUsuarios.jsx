import { AppBar, Box, Button, Container, Grid, IconButton, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Toolbar, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useNavigate } from 'react-router-dom';
import MainDrawer from '../../../Herramientas/Drawer/MainDrawer';
import clsx from 'clsx';
import TablePaginationActions from '@material-ui/core/TablePagination/TablePaginationActions';

const ListaUsuarios = () => {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('xs'))
  const classes=useStyles()
  const navigation = useNavigate()
  const [user, setUser] = useState([])
  const [rowsPerPage, setRowsPerPage] = React.useState(3);
  const [page, setPage] = React.useState(0);

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
  // console.log(user)

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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      {/* <MainDrawer /> */}
      {/* <AppBar
        position='absolute'
        className={classes.appBar}
      >
        <Toolbar>
          <div style={{ flexGrow: 1 }}></div>
          <Button onClick={() => navigation('/')} style={{ color: 'white' }}>Cerrar Sesion</Button>
        </Toolbar>
      </AppBar> */}
      <Container maxWidth={false} style={isMatch? { marginTop: 10, paddingLeft:0 }:{ marginTop: 50, paddingLeft: 240 }}>
        <Typography variant='h5' align='center'>Lista de Usuarios</Typography>
        <Paper component={Box} p={1}>
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
                  user.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((e, index) => (
                    <TableRow key={index}>
                      <TableCell>{e.username}</TableCell>
                      <TableCell>{e.name}</TableCell>
                      <TableCell>{e.email}</TableCell>
                      <TableCell>{e.address.city}</TableCell>
                      <TableCell>{e.phone}</TableCell>
                      <TableCell>
                        <Grid container direction='row' justify='space-evenly'>
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
          <TablePagination
            rowsPerPageOptions={[3, 8, 50, 100]}
            component="div"
            count={user.length}
            rowsPerPage={rowsPerPage}
            page={page}
            // onPageChange={handleChangePage}
            onChangePage={handleChangePage}
            // onRowsPerPageChange={handleChangeRowsPerPage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </Container>
    </>
  )
}

export default ListaUsuarios

const useStyles=makeStyles((theme)=>({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background:'#37474f'
  },
}))