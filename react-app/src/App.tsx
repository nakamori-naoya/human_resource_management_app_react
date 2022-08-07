import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundaryPractice from './components/pages/errorBoundaryPractice/ErrorBoundaryPractice';
import Auth from './components/pages/auth/Auth';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/error-boundary-practice' element={<ErrorBoundaryPractice />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
