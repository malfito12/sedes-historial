import { Grid, Container, Typography, InputLabel, TextField, InputAdornment, Button } from '@material-ui/core'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const Inicio = () => {
  const {login}=useContext(AuthContext)
  const navigation = useNavigate()
  const [changeData, setChangeData] = useState({ user_name: '', user_pass: '' })

  //-------------LOGIN-------------------------
  // const login = (e) => {
  //   e.preventDefault()
  //   // console.log(changeData)
  //   if (changeData.user_name === 'admin' && changeData.user_pass === 'admin') {
  //     window.localStorage.setItem('login',true)
  //     // return navigation('/usuarios')
  //   } else {
  //     return alert('Contraseña Incorrecta')
  //   }
  // }

  //-----------HANLDE CHANGE---------------------
  const handleChange = (e) => {
    setChangeData({
      ...changeData,
      [e.target.name]: e.target.value
    })
  }
  return (
    <Container fixed style={{display:'flex',height:'70vh', alignItems:'center',justifyContent:'center'}}>
      <div >
        <Typography align='center' variant='h5' style={{marginBottom:50}}>Iniciar Sesion</Typography>
        <Container maxWidth='sm'>
          <form onSubmit={()=>login(changeData)}>
          {/* <form onSubmit={login}> */}
            <InputLabel style={{ marginBottom: 10 }}>Nombre de Usuario</InputLabel>
            <TextField
              name='user_name'
              style={{ marginBottom: 10 }}
              variant='outlined'
              size='small'
              fullWidth
              defaultValue={changeData.user_name}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment style={{ paddingRight: 10 }}>
                    <AccountCircleIcon />
                  </InputAdornment>
                )
              }}
            />
            <InputLabel style={{ marginBottom: 10 }}>Contraseña</InputLabel>
            <TextField
              name='user_pass'
              style={{ marginBottom: 10 }}
              variant='outlined'
              size='small'
              type='password'
              fullWidth
              defaultValue={changeData.user_name}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment style={{ paddingRight: 10 }}>
                    <LockIcon />
                  </InputAdornment>
                )
              }}
            />
            <Button type='submit' fullWidth variant='outlined' style={{ background: '#43a047', color: 'white', marginTop: 10, marginBottom: 10 }}>Iniciar Sesion</Button>
          </form>
          <Grid container direction='row' justify='space-between'>
            <Typography>
              <Link to='/registro-usuario' style={{ textDecoration: 'none', color: '#0288d1' }}>
                Registrarse
              </Link>
            </Typography>
            <Typography>
              <Link to='/password' style={{ textDecoration: 'none', color: '#0288d1' }}>
                ¿Olvidate tu Contraseña?
              </Link>
            </Typography>
          </Grid>
        </Container>
      </div>
    </Container>
  )
}

export default Inicio