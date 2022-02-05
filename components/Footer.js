import React from 'react';
import {Typography} from '@mui/material';

const styles = {
    root:{
        height:100,
        border:'1px solid rgba(0, 0, 0, 0.12)',
        display:'flex',
        justifyContent:'center',
        borderRadius:2,
        alignItems:'center',
        '&:hover':{
            boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'
        }
    }
}

export default function Footer() {
    return (
        <footer style={styles.root}>
            <Typography variant="subtitle1">
                All Rights Reserved - 2022
            </Typography>
        </footer>
    )
}
