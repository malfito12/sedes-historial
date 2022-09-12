import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const MainDrawer = () => {
    const {logout}=useContext(AuthContext)
    const navigate=useNavigate()
    const classes = useStyles()
    console.log(classes.toolbar)
    return (
        <Drawer
            className={classes.drawer}
            variant='permanent'
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor='left'
        >
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <ListItem button onClick={()=>navigate('/private/usuarios')}>
                    <ListItemIcon style={{color:'white'}}>
                        <DeleteIcon />
                    </ListItemIcon>
                    <ListItemText primary='Usuarios' style={{color:'white'}} />
                </ListItem>
                <ListItem button onClick={()=>navigate('/private/equipos')}>
                    <ListItemIcon style={{color:'white'}}>
                        <DeleteIcon />
                    </ListItemIcon>
                    <ListItemText primary='Equipos' style={{color:'white'}}/>
                </ListItem>
                <ListItem button onClick={logout}>
                    <ListItemIcon style={{color:'white'}}>
                        <DeleteIcon />
                    </ListItemIcon>
                    <ListItemText primary='Cerrar Sesion' style={{color:'white'}}/>
                </ListItem>
            </List>
        </Drawer>
    )
}

export default MainDrawer

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        background:'#424242'  
    },
    toolbar: theme.mixins.toolbar
}))