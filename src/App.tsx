import { Routes, Route } from 'react-router-dom';

const App= () => {
  return ( 
    <Routes>
      <Route path="/" element={<h1>hi</h1>} />
    </Routes>
   );
}
 
export default App;