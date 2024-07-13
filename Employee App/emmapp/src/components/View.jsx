import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const View = () => {
  var[emp,setemp]=useState([])
  var navigate=useNavigate()  
  
  // useEffect(()=>{},[])
  useEffect(()=>{
  axios.get("http://localhost:3700/view")
  .then((res)=>{
    console.log(res)
    setemp(res.data)
  })
  .catch((error)=>{console.log("error")})
},[])
const delvalue=(id)=>{
  console.log(id)
  axios.delete("http://localhost:3700/remove/"+id)
  .then((res)=>{alert(res.data.message)
    window.location.reload()
  }).catch((error)=>{error})

}
const updatevalue=(val)=>{
  console.log("UP CLICKED")
  navigate ("/a",{state:{val}});
};
  return (
    <div>
        <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Department&nbsp;</TableCell>
            <TableCell align="right">Salary&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {emp.map((val,i)=>{
            return(
            <TableRow>
              <TableCell >{val.Name}</TableCell>
              <TableCell align='right'>{val.Age} </TableCell>
              <TableCell align='right'>{val.Department}</TableCell>
              <TableCell align='right'>{val.Salary}</TableCell>
              <Button variant='contained'
              onClick={()=>{delvalue(val._id)}}
              >DELETE</Button>&nbsp;&nbsp;
               <Button variant='contained'onClick={()=>{updatevalue(val)}}>UPDATE</Button>
            </TableRow>
          )})}
        </TableBody> 
      </Table>
    </TableContainer>
    </div>
  )
}

export default View
