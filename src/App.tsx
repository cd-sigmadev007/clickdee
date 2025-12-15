import { BrowserRouter, useRoutes } from 'react-router-dom';
import { MainLayout } from './layout';
import { routes } from './routes';

function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

function App() {
  return (
    <BrowserRouter>
    <MainLayout>
        <AppRoutes />
    </MainLayout>
    </BrowserRouter>
  );
}

export default App;
