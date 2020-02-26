import React from 'react'
import { Grid, Paper, Typography, Button} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'

const MovieModal = (props) => {
  console.log(props)
	return (
      <Paper className='movieModal'>
        <Typography variant='h2' gutterBottom className='PageHeader'>
          {props.movie.title}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={5} >
            <img src={props.movie.picture} className='movieImage' />
            <br />
            <Button variant='contained' color='primary'>Add to List</Button>
          </Grid>
            <Grid item xs={7} >
              <div>
                <Rating name='half-rating-read' value={props.movie.rating} precision={0.1} readOnly size='large' max={10}/> 
                <Typography variant='h6' className='PageHeader'>TMDB Rating: {props.movie.rating}</Typography>
              </div>
              <div>
                <Typography variant='body1' className='PageHeader'>{props.movie.description}</Typography>
                </div>

                {props.movie.trailer ?
                
                  <iframe 
                    align='center'
                    width="500" 
                    height="350"
                    src={`https://www.youtube.com/embed/${props.movie.trailer}`}
                    style={{marginTop:'5vh', }}>
                    </iframe>
                
                  :
                  null
                }
            </Grid>
        </Grid>
      </Paper>
		)
}

export default MovieModal