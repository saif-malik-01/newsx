import React from 'react'
import { Button, TextField, Typography } from '@mui/material'

const styles = {
    input:{
        '& > div':{
            borderRadius:'0px',
            backgroundColor:'#f5f5f5'
        },
        width:'70%',
        borderRadius:'0px',
    },
    btn:{
        borderRadius:'0px',
        backgroundColor:'#E52D2D',
        height:'40px',
        '&:hover':{
            backgroundColor:'black',
        }
    }
}



const NewsLetter = () => {
    return (
        <div>
            <Typography sx={{my:1}} variant="subtitle1">Subscribe Our Newsletter</Typography>
            <div>
               <TextField sx={styles.input} color="error" size="small" placeholder="Enter Email Address" />
               <Button sx={styles.btn} variant="contained">Subscribe</Button>
            </div>
        </div>
    )
}

export default NewsLetter
