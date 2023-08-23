import React, { useEffect, useState } from "react";
import { signInUser } from "../../redux/actionCreators/authActionCreator";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("fill email and password");
      return;
    }
    dispatch(signInUser(email, password, setSuccess));
  };

  useEffect(() => {
    if (success) {
      navigate("/dashboard");
    }
  }, [success]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group my-2">
        <input
          type="email"
          className="form-control"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group my-2">
        <input
          type="password"
          className="form-control"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn form-control btn-primary my-2">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
