import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ParentA from './components/pages/parentA/ParentA';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ParentA />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
