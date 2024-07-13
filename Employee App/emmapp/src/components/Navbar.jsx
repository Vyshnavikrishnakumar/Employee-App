import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

      <Box >
        <AppBar color='secondary'>
            <Toolbar>
                <Typography variant='h4'>EMPLOYEE DATA ENTRY</Typography>
                <Button variant='contained' color="error" style={{ marginLeft: 'auto' }  } > 
                  <Link to={'/a'} 
                  style={{textDecoration:"none",color:'white'}}>ADD </Link>
                  </Button>&nbsp;&nbsp;
                <Button variant='contained'>
                 <Link to={'/'} 
                  style={{textDecoration:"none",color:'white'}}>VIEW</Link></Button>
                </Toolbar>

        </AppBar>
      </Box>
      <br /><br /><br /><br /><br />
    </div>
   
  )
}

export default Navbar
