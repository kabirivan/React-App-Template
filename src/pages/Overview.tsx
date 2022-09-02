import type { FC } from "react";
import { Helmet } from "react-helmet-async";
import { Box, Container, Divider } from "@mui/material";
import "./Styles.css";
import CounterView from "../components/counter/CounterView";
import { LogoReact } from "../components/logo/LogoReact";
import { PokemonOverview } from "../components/pokemon/PokemonOverview";

const Overview: FC = () => {
  return (
    <>
      <Helmet>
        <title>Overview | JRTEC</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.paper",
          minHeight: "100%",
        }}
      >
        <Box sx={{ py: 6 }}>
          <Container maxWidth="lg">
            <LogoReact />
            <Divider />
            <PokemonOverview />
            <Divider />
            <CounterView />
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Overview;
