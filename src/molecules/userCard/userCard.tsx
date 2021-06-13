import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from 'assets/space4.jpg';
import { useStyles } from './useStyles';


export function UserCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Image}
          title="User Avatart"
        />
        <CardContent>
          <Typography component="h2" gutterBottom variant="h5">
            Bren
          </Typography>
          <Typography color="textSecondary" component="p" variant="body2">
            My name is Bren I&apos;m default user of any exmample project
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary" size="small">
          Go to Profile
        </Button>
      </CardActions>
    </Card>
  );
}