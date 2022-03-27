import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import logo from 'src/logo.svg';
import { useSelector, useDispatch } from 'src/redux/store';
import { incrementAction, decrementAction, incrementByAmountAction } from 'src/redux/slices/counter'
import './Styles.css';

const BlogPostList: FC = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Overview | JRTEC</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          minHeight: '100%'
        }}
      >
        <Box sx={{ py: 6 }}>
          <Container maxWidth="lg">
            <Box
              sx={{
                direction: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center'
              }}
            >
              <img src={logo} className="App-logo" alt="logo" />
            </Box>
            <Divider />
            <Typography
              color="textPrimary"
              variant="h3"
            >
              Llamada a API POKEMON
            </Typography>
            <Box sx={{ my: 6 }}>
              <Grid
                container
                spacing={6}
              >
                {[{ id: 1, name: 'pikachu' }].map((post) => (
                  <Grid
                    item
                    key={post.id}
                    lg={4}
                    md={6}
                    xs={12}
                  >
                    {post.name}
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Divider />
            <Box sx={{ mt: 2 }}>
              <Typography
                color="textPrimary"
                variant="h3"
              >
                {`Estados Redux: ${count}`}
              </Typography>
              <Box sx={{ mt: 3, display: 'flex', direction: 'row', justifyContent: 'flex-start', spacing: 2 }}>
                <Button variant="contained" onClick={() => dispatch(incrementAction())}>Aumentar</Button>
                <Box sx={{ ml: 2 }} />
                <Button variant="contained" onClick={() => dispatch(decrementAction())}>Disminuir</Button>
                <Box sx={{ ml: 2 }} />
                <Button variant="contained" onClick={() => dispatch(incrementByAmountAction(2))}>Sumar 2</Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default BlogPostList;
