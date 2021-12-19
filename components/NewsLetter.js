import React from 'react'
import { Button, TextField, Typography } from '@mui/material'

const styles = {
    input:{
        '& > div':{
            borderRadius:'0px',
        },
        width:'60%',
        borderRadius:'0px',
    }
}



const NewsLetter = () => {
    return (
        <div>
            <Typography>Subscribe Our Newsletter</Typography>
            <div>
               <TextField sx={styles.input} size="small" placeholder="Enter Email Address" />
               <Button sx={{borderRadius:'0px',backgroundColor:'#E52D2D',height:'40px'}} variant="contained">Subscribe</Button>
            </div>
        </div>
    )
}

export default NewsLetter
