import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundaryPractice from './components/pages/errorBoundaryPractice/ErrorBoundaryPractice';
import AuthPresenter from './components/pages/auth/AuthPresenter';
import TopPage from './components/pages/topPage/TopPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthPresenter />} />
          <Route path='/success' element={<TopPage />} />
          <Route path='/error-boundary-practice' element={<ErrorBoundaryPractice />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
