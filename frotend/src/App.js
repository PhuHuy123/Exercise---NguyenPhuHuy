
import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Client from './pages/Client'
import LoginPage from './pages/Auth/Login'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <>
    <Routes>
      <Route element={<Admin />} path="admin/*" />
      <Route element={<Client />} path="client/*" />
      <Route element={<Auth />} path="auth/*" />
      <Route element={<LoginPage />} path="/" />
    </Routes>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
  </>
)

export default App
