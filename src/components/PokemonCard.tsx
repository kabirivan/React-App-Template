import type { FC } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography
} from '@mui/material';

interface PokemonCardProps {
  pokemon?: any;
}

const PokemonCard: FC<PokemonCardProps> = (props) => {
  const {
    pokemon,
    ...other
  } = props;

  return (
    <>
      <Card {...other}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
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
        </CardActionArea>
      </Card>
    </>
  );
};


export default PokemonCard;
