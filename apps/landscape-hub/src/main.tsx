import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { client } from '@landscape/api';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {Toaster as SonnerToaster} from 'sonner';
import { SheetProvider } from '@landscape/contexts';
// Create a client
const queryClient = new QueryClient();

client.setConfig({
  baseURL: 'https://localhost:7275',
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <SheetProvider>
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
          <SonnerToaster richColors/>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
    </SheetProvider>
  </StrictMode>
);
