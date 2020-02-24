import React from 'react'
import { Link, Card, Button, CardActionArea, CardContent, CardActions, CardMedia, Typography } from '@material-ui/core'


const ListCard = (props) => {
	console.log(props)
	return (
	<Card >
      <CardActionArea>
        <CardMedia
          image={props.list.movies[0].picture}
          title="Contemplative Reptile"
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.list.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          	Created by: {props.list.creator} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

		)


}

export default ListCard