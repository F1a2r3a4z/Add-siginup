import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Signup = () => {
    const [showpassword,setshowpassword]=useState (false)
  return (
    <div className='w-50 container mt-5'>
<Box className="text-center">
<Typography variant='h4'>Get Start Shopping</Typography>
<Typography variant='body1'>Welcome to FreshCart! Enter your email to get started.</Typography>

</Box>
<Box>
    <TextField size='small' type='text' fullWidth placeholder='First Name'/>
</Box>
<Box>
    <TextField type='text' className='my-4' size='small' fullWidth placeholder='Second Name'/>
</Box>
<Box>
    <TextField type='email' className='my-4' size='small' fullWidth placeholder='Email'/>
</Box>
<Box>
    <TextField 
     className='my-4' size='small' type={showpassword?"text":"password"} fullWidth 
     slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="start" onClick={()=>setshowpassword(!showpassword)}>
             {showpassword?  <VisibilityOffIcon/> :<VisibilityIcon />}
            </InputAdornment>
          ),
        },
      }} placeholder='Password'/>
</Box>
<Box>
    <Button fullWidth size='small' variant='contained'> Register </Button>
</Box>


    </div>
  )
}

export default Signup