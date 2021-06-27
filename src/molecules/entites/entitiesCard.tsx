import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStyle } from './useStyle';

export interface Props {
  description: string;
  title: string;
}

export function EntitiesCard({ description, title }: Props) {
  const styles = useStyle();

  return (
    <Card className={styles.cardWrapper}>
      <CardActionArea>
        <CardContent>
          <Typography component="h2" gutterBottom variant="h5">
            { title }
          </Typography>
          <Typography color="textSecondary" component="p" variant="body2">
            { description }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary" size="small">
          Share
        </Button>
        <Button color="primary" size="small">
          Go to entity
        </Button>
      </CardActions>
    </Card>
  );
}