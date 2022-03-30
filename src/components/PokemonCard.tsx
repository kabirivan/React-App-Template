import type { FC } from 'react';
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography
} from '@mui/material';

interface PokemonCardProps {
  pokemon?: {
    name: string,
    url: string
  };
}

const PokemonCard: FC<PokemonCardProps> = (props) => {
  const {
    pokemon
  } = props;

  return (
    <>
      <Card sx={{ maxWidth: 200, alignContent: 'center', alignItems: 'center' }}>
        <CardActionArea sx={{ alignContent: 'center', alignItems: 'center', display: 'flex', direction: 'column', p: 2 }}>
          <CardMedia
            component="img"
            width="80"
            sx={{ width: 80, px: 2 }}
            image={`https://img.pokemondb.net/artwork/${pokemon?.name}.jpg`}
            alt="pokemon"
          />
          <CardContent>
            <Typography gutterBottom variant="caption" component="div">
            {pokemon?.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default PokemonCard;
