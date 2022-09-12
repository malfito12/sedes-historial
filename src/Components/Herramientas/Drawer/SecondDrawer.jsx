import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

const SecondDrawer = () => {
    const {logout}=useContext(AuthContext)
    const classes=useStyles()
    const [openDrawer, setOpenDrawer] = useState(false)

    const openCloseDrawerMenu = () => {
        setOpenDrawer(!openDrawer)
    }
    const cerrar=()=>{
        logout()
        openCloseDrawerMenu()
    }
    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={openCloseDrawerMenu}
                anchor='left'
                classes={{ paper: classes.drawerPaper }}

            >
                <List>
                    <ListItem
                        divider
                        button
                        component={Link}
                        to='/private/usuarios'
                        onClick={openCloseDrawerMenu}
                    >
                        <ListItemIcon >
                            <ListItemText className={classes.textColor}>Usuarios</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        divider
                        button
                        component={Link}
                        to='/private/equipos'
                        onClick={openCloseDrawerMenu}
                    >
                        <ListItemIcon >
                            <ListItemText className={classes.textColor}>Equipos</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        divider
                        button
                        onClick={cerrar}
                    >
                        <ListItemIcon >
                            <ListItemText className={classes.textColor}>Cerrar Sesion</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton onClick={openCloseDrawerMenu} color='inherit'>
                <MenuIcon />
            </IconButton>
        </>
    )
}

export default SecondDrawer

const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        width: '200px',
        background: '#141e30'
    },
    textColor: {
        color: 'white'
    }
}))
