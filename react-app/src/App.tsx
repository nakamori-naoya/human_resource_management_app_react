import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundaryPractice from './components/pages/errorBoundaryPractice/ErrorBoundaryPractice';
import AuthPresenter from './components/pages/auth/AuthPresenter';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthPresenter />} />
          <Route path='/error-boundary-practice' element={<ErrorBoundaryPractice />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
