import { useState } from "react";
import "./register.scss";
import { Link } from "react-router-dom";
import axios from "axios";
function Register(props) {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(inputs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/auth/register", inputs);
    } catch (err) {
      setErr(err);
      console.log(err.response.data);
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            minus delectus, ad, rem, eveniet excepturi aut quos minima dolorem
            eligendi odio accusamus nisi est quaerat culpa optio. Esse,
            explicabo expedita.
          </p>
          <span>Do you have an account</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="registerRight">
          <h1>Register</h1>
          <form action="">
            <input
              type="text"
              placeholder="Username"
              className="registerInput"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="email"
              className="registerInput"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              className="registerInput"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Name"
              className="registerInput"
              name="name"
              onChange={handleChange}
            />
            {err && <span className="errColor">{err.response.data}</span>}
            <button onClick={handleSubmit}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
