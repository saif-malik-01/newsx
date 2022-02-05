import { Grid,Typography,Button, Card as Container } from '@mui/material';
import React from 'react';
import Card from './Card';

const styles = {
    btn:{
        borderRadius:'0px',
        backgroundColor:'#E52D2D',
        '&:hover':{
            backgroundColor:'black',
        }
    }
}

export default function Section() {
    return (
        <Container variant="outlined" sx={{mt:4,p:2}}>
            <Grid container >
                <Grid xs={12} item display="flex" alignItems="center" sx={{px:6,py:2}} >
                    <Typography variant="h6">
                        RECENT NEWS
                    </Typography>
                    <div style={{flex:1}}/>
                    <Button variant="contained" sx={styles.btn}>More</Button>
                </Grid>
                <Grid item xs={12} container spacing={2}  justifyContent="center">
                    {[1,2,3,4].map((i)=>{
                    return <Grid item key={i}>
                                <Card/>
                            </Grid>
                    })}
                </Grid>
            </Grid>
        </Container>
    )
}
