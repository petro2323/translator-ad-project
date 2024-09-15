import { AppRoutes } from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
      <HelmetProvider>
          <AppRoutes />
      </HelmetProvider>
  );
}

export default App;
