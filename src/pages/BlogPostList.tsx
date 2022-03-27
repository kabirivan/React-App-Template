import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Grid,
} from '@mui/material';

const BlogPostList: FC = () => {

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
            <Box sx={{ mt: 6 }}>
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
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default BlogPostList;
