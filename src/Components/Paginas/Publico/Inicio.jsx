import { Grid,Container, Typography, InputLabel, TextField, InputAdornment, Button } from '@material-ui/core'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';

const Inicio = () => {
  return (
    <Container fixed>
      <Typography align='center' variant='h5'>Iniciar Sesion</Typography>
      <Container maxWidth='sm'>
        <InputLabel style={{ marginBottom: 10 }}>Nombre de Usuario</InputLabel>
        <TextField
          style={{ marginBottom: 10 }}
          variant='outlined'
          size='small'
          fullWidth
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
          style={{ marginBottom: 10 }}
          variant='outlined'
          size='small'
          type='password'
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment style={{ paddingRight: 10 }}>
                <LockIcon />
              </InputAdornment>
            )
          }}
        />
        <Button fullWidth variant='outlined' style={{ background: '#43a047', color: 'white', marginTop: 10, marginBottom: 10 }}>Iniciar Sesion</Button>
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

    </Container>
  )
}

export default Inicio