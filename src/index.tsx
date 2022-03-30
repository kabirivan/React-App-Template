import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from 'src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { SettingsProvider } from './contexts/SettingsContext';
import { AuthProvider } from './contexts/JWTContext';
import LoadingScreen from 'src/components/LoadingScreen';

ReactDOM.render(
  <StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={<LoadingScreen />} persistor={persistor}>
          <SettingsProvider>
            <BrowserRouter>
              <AuthProvider>
                <App />
              </AuthProvider>
            </BrowserRouter>
          </SettingsProvider>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </StrictMode>,
  document.getElementById('root')
);

