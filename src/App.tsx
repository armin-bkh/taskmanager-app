import { Routes, Route, useRoutes } from 'react-router-dom';
import routes from './Routes/routes';

const App= () => {
  const allRoutes = useRoutes(routes);
  return allRoutes;
}
 
export default App;