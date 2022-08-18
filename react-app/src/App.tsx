import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPresenter from './components/pages/auth/AuthPresenter';
import TopPage from './components/pages/topPage/TopPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import RouteAuthGuard from './routes/RouteAuthGuard';

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthPresenter />} />
          <Route
            path='/success'
            element={<RouteAuthGuard component={<TopPage />} redirect='/' />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
