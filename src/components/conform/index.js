import { Fab } from '@mui/material';
import React from 'react'
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
function Conform() {
  return (
    <div className='conform'>
        <Fab size='large' color="error" aria-label="add">
         <CheckCircleSharpIcon size='large' />
        </Fab>
        <h1>Thank you</h1>
        <p>
            Thanks for conforming your subscription! We hope you have 
            fun using our platform. If you ever need support, please feel 
            free to email us at support@loremgaming.com.
        </p>
    </div>
  )
}

export default Conform;