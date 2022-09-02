import { Box, Typography } from "@mui/material";
import logo from "src/logo.svg";

export const LogoReact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        direction: "column",
        justifyContent: "center",
        alignItems: "center",
        mb: 3,
      }}
    >
      <Box>
        <img src={logo} className="App-logo" alt="logo" />
      </Box>
      <Box>
        <Typography color="textSecondary" variant="h5">
          React JS
        </Typography>
      </Box>
    </Box>
  );
};
