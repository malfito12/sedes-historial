import React from 'react'
import { Container, Typography, Button, TextField, InputLabel } from '@material-ui/core'
import {useNavigate} from 'react-router-dom'
const NuevoUsuario = () => {
    const navigation=useNavigate()
    return (
        <Container fixed>
            <Typography variant='h5' align='center'>Registrar Nuevo Usuario</Typography>
            <Container maxWidth='sm'>
                <div style={{ margin: 10 }}>
                    <InputLabel style={{ marginBottom: 10 }}>Nombre de Usuario</InputLabel>
                    <TextField variant='outlined' size='small' fullWidth />
                </div>
                <div style={{ margin: 10 }}>
                    <InputLabel style={{ marginBottom: 10 }}>Nombres</InputLabel>
                    <TextField variant='outlined' size='small' fullWidth />
                </div>
                <div style={{ margin: 10 }}>
                    <InputLabel style={{ marginBottom: 10 }}>Apellido Paterno</InputLabel>
                    <TextField variant='outlined' size='small' fullWidth />
                </div>
                <div style={{ margin: 10 }}>
                    <InputLabel style={{ marginBottom: 10 }}>Apellido Materno</InputLabel>
                    <TextField variant='outlined' size='small' fullWidth />
                </div>
                <div style={{ margin: 10 }}>
                    <InputLabel style={{ marginBottom: 10 }}>Correo Electronico</InputLabel>
                    <TextField variant='outlined' size='small' fullWidth type='email' />
                </div>
                <div style={{ margin: 10 }}>
                    <InputLabel style={{ marginBottom: 10 }}>Contraseña</InputLabel>
                    <TextField variant='outlined' size='small' fullWidth type='password' />
                </div>
                <div style={{ margin: 10 }}>
                    <InputLabel style={{ marginBottom: 10 }}>Repita Contraseña</InputLabel>
                    <TextField variant='outlined' size='small' fullWidth type='password' />
                </div>
                <div style={{ margin: 10 }}>
                    <Button
                        fullWidth
                        variant='outlined'
                        style={{ background: '#43a047', color: 'white', marginTop: 10 }}
                        onClick={()=>navigation('/')}
                    >registrar</Button>
                </div>

            </Container>
        </Container>
    )
}

export default NuevoUsuario