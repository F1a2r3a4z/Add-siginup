import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

const Signin = () => {
    const [showpassword,setshowpassword]=useState(false)
  return (
    <div className='w-50 container mt-5'>
<Box className="text-center">
<Typography variant='h4'>Sign in to FreshCart</Typography>
<Typography variant='body1'>Welcome back to FreshCart! Enter your email to get started.</Typography>

</Box>
<Box>
    <TextField size='small' fullWidth placeholder='Email'/>
</Box>
<Box>
    <TextField type={showpassword?"text":"password"} className='my-4' size='small' fullWidth 
    slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="start" onClick={()=>setshowpassword(!showpassword)}>
             {showpassword? <VisibilityOffIcon />: <VisibilityIcon/>}
            </InputAdornment>
          ),
        },
      }} placeholder='Password'/>
</Box>
<Box>
    <Button fullWidth size='small' variant='contained'> Sign in </Button>
</Box>
<Box className="mt-4 text-center">Don’t have an account? <Link to="/signup"> Sign Up</Link></Box>

    </div>
  )
}

export default Signin