import { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
function Login(props) {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setErr(err);
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            minus delectus, ad, rem, eveniet excepturi aut quos minima dolorem
            eligendi odio accusamus nisi est quaerat culpa optio. Esse,
            explicabo expedita.
          </p>
          <span>Don't you have an account</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="loginRight">
          <h1>Login</h1>
          <form action="">
            <input
              type="text"
              placeholder="Username"
              className="loginInput"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              name="password"
              onChange={handleChange}
            />
            {/* {err && <span>{err.response.data}</span>} */}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
