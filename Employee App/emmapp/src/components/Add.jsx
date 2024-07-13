import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = (props) => {
  var[input,setinputs]=useState({Name:"",Age:"",Department:"",Salary:""})
  var navigate=useNavigate()
  var location=useLocation()
  console.log(location.state)
  const inputHandler=(e)=>{
      setinputs({...input,[e.target.name]:e.target.value})
      console.log(input) 
     }
     const Addhandler=()=>{
      if (location.state!==null){

        axios.put("http://localhost:3700/update/"+location.state.val._id,input)
        .then((res)=>
          {
            console.log(res)
            alert(res.data.message)
            navigate('/')
          })
      .catch((error)=>{console.log(error)})
      
    }else{

        axios.post("http://localhost:3700/add",input)
     .then((res)=>{
      console.log(res)
      alert(res.data.message)
      navigate('/')
     })
     .catch((err)=>{console.log(err)})}
    }
     useEffect(()=>{
                  if (location.state!==null){
                    setinputs({...input,
                      Name:location.state.val.Name,
                      Age:location.state.val.Age,
                      Department:location.state.val.Department,
                      Salary:location.state.val.Salary

                    }

                    )
                  }

     },[] );
  return (
    <div>
        <br />
        
      <Typography variant='h3'>EmployeApp</Typography>&nbsp;&nbsp;

      <Typography variant='h5'>ENTER  DATA</Typography>
      <br /><br /><br />
      <TextField variant='outlined' label='Name' 
      onChange={inputHandler}
      name="Name"
      value={input.Name}>
      </TextField>
      <br /><br />
      <TextField variant='outlined' label='Age'
       onChange={inputHandler}
       name="Age"
       value={input.Age}>
        </TextField>
        <br /><br />
    <TextField variant='outlined' label='Department'
     onChange={inputHandler}
     name="Department"
     value={input.Department}>
        </TextField>
        <br /><br />
        <TextField variant='outlined' label='Salary'
         onChange={inputHandler}
         name="Salary"
         value={input.Salary}>
        </TextField>
        <br />
        <br />
        <Button variant='contained' onClick={Addhandler}>
            SUBMIT
        </Button>
    </div>
  )
}

export default Add
