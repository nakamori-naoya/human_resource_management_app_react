import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundaryPractice from './components/pages/errorBoundaryPractice/ErrorBoundaryPractice';
import AuthPresenter from './components/pages/auth/AuthPresenter';
import TopPage from './components/pages/topPage/TopPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
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
