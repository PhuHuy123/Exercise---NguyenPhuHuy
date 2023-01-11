import LoginPage from './Login'
import SignupPage from './Signup'
import { Routes, Route } from 'react-router-dom'
const Auth = () => {
  
    return (
      <>
        {/* {role && isLoggedIn ? (
          'Admin' === role ? (
            <Navigate to="/admin" />
          ) : (
            <Navigate to="/client" />
          )
        ) : ( */}
          <Routes>
            <Route element={<LoginPage />} path="login" />
            <Route element={<SignupPage />} path="signup" />
            {/* <Route element={<>Register</>} path="register" />
            <Route element={<NotExist />} path="*" /> */}
          </Routes>
        {/* )} */}
      </>
    )
  }
  
  export default Auth