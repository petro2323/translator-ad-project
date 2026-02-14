import { AppRoutes } from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
      <HelmetProvider>
          <AppRoutes />
      </HelmetProvider>
  );
}

export default App;
