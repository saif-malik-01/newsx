import { Card as Container ,CardMedia,CardActions,CardContent, Typography,Button } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import React from 'react'

const styles = {
   

}



export default function Card() {
    return (
        <Container sx={{ width: 300 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://picsum.photos/400/120?grayscale"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{color:'black',fontWeight:'bold',p:1}}>
            Learn More
            <ArrowForwardRoundedIcon sx={{fontSize:'20px',ml:2}}/>
          </Button>
        </CardActions>
      </Container>
    )
}
