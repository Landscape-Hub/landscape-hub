import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </StrictMode>
);
