import { Toaster } from 'react-hot-toast';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { createCustomTheme } from 'src/theme';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollReset from 'src/hooks/useScrollReset';
import useSettings from 'src/hooks/useSettings';
import routes from './routes';

const App = () => {
  const { settings } = useSettings();
  const content = useRoutes(routes);

  useScrollReset();

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
      {content}
    </ThemeProvider>
  );
};

export default App;
