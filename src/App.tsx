import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';

const App= () => {
  return ( 
    <Routes>
      <Route path="/" element={<Layout>are</Layout>} />
    </Routes>
   );
}
 
export default App;