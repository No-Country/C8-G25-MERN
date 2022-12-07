import React from 'react'
import { Drawer,Tooltip, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import linksArray from '../../utils/NavLinks';

const DrawerComp = () => {

  const [open, setOpen] = useState(false)  

  return (
    <>
    <Drawer anchor="top" open={open} onClose={()=>setOpen(false)} >
        <List >
    
                 {linksArray.map((linksArray, index) => (
                
                  <ListItemButton sx={{width: "0"}}>
                      <ListItemIcon>
                          <ListItemText>{linksArray}</ListItemText>
                      </ListItemIcon>
                  </ListItemButton>
                
                ))}
        </List>
    </Drawer>
    <Tooltip title="Add" placement="right">
    <IconButton sx={{margin:"auto", width:"10vw"}}onClick={()=> setOpen(!open)}>
        <MenuRoundedIcon sx={{color:"white"}}/>
    </IconButton>
    </Tooltip>
    </>
  )
}

export default DrawerComp;