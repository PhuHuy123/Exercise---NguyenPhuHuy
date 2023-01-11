import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../../components/Layout";
import User from "../../components/Manager/User";
import Article from "../../components/Manager/Article";
import Author from "../../components/Manager/Author";
import { useSelector } from 'react-redux'
import LoginPage from '../../pages/Auth/Login'
const Admin = () => {
  const { isLoggedIn, role } = useSelector((state) => state.login)
  return (
    <>
     {!isLoggedIn ? (
            <Navigate to="/auth/login" />
          ) : '1' === role ? (
      <Layout>
        <Routes>
          <Route element={<User />} path="manager-users" />
          <Route element={<Article />} path="manager-articles" />
          <Route element={<Author />} path="manager-authors" />
        </Routes>
      </Layout>
      ) : (
        <Routes>
          <Route element={<LoginPage />} path="/auth/login" />
        </Routes>
      )}
    </>
  );
};
export default Admin;
