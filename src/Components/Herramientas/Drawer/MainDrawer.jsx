import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

const MainDrawer = () => {
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
                <ListItem button>
                    <ListItemIcon style={{color:'white'}}>
                        <DeleteIcon />
                    </ListItemIcon>
                    <ListItemText primary='Usuarios' style={{color:'white'}} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon style={{color:'white'}}>
                        <DeleteIcon />
                    </ListItemIcon>
                    <ListItemText primary='Equipos' style={{color:'white'}}/>
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