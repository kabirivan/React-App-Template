import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@mui/material/styles'
import { createCustomTheme } from 'src/theme';
import CssBaseline from '@mui/material/CssBaseline';
import useSettings from 'src/hooks/useSettings';


const App = () => {
  const { settings } = useSettings();

  const theme = createCustomTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    roundedCorners: settings.roundedCorners,
    theme: settings.theme
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toaster position="top-center" />
    </ThemeProvider>
  );
}

export default App;
