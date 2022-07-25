import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ParentA from './components/pages/parentA/ParentA';
import ErrorBoundaryPractice from './components/pages/errorBoundaryPractice/ErrorBoundaryPractice';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ParentA />} />
          <Route path='/error-boundary-practice' element={<ErrorBoundaryPractice />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
