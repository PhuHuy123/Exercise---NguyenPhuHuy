import "./Client.scss";
import { useNavigate } from "react-router-dom";
import { getAllArticles } from "../../config/apiService";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userLogOut } from "../../redux/login/actions";
const Client = () => {
  const dispatch = useDispatch();
  const userLogoutSaga = useCallback(
    () => dispatch(userLogOut()),
    [dispatch]
  );
  const { isLoggedIn, role } = useSelector((state) => state.login);
  const [allArticle, setAllArticle] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    handleAllArticles()
  }, []);
  const handleAllArticles =async()=>{
    let res = await getAllArticles();
    console.log(res.data);
    if (res && res.status === 200) {
      setAllArticle(res.data);
    }
  }
  const handleLogOut = () => {
    userLogoutSaga()
    localStorage.removeItem("token");
    navigate("/auth/login");
  };
  const handleClick = (id) => {
    navigate(`${id}`);
  };
  return (
    <>
      {isLoggedIn && role === "2" && (
        <>
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Article
              </a>
              <button onClick={() => handleLogOut()}>Logout</button>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              {allArticle &&
                allArticle.length > 0 &&
                allArticle.map((item, index) => (
                  <div
                    className="col-3 grid-post"
                    key={index}
                    onClick={() => handleClick(item._id)}
                  >
                    <div>
                      <b>{item.title}</b>
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Client;
