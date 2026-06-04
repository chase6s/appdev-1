import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HealthCheck from './pages/HealthCheck';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Dashboard: Welcome!</div>} />
          <Route path="health" element={<HealthCheck />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
