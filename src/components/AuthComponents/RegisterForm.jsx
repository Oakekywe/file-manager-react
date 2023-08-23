import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../redux/actionCreators/authActionCreator";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !passwordConfirmation) {
      alert("Please fill all fields");
      return;
    }
    if (password != passwordConfirmation) {
      alert("password not the same");
      return;
    }
    dispatch(signUpUser(name, email, password, setSuccess));
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
          type="name"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group my-2">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group my-2">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group my-2">
        <input
          type="password"
          className="form-control"
          placeholder="Password Confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
      </div>
      <button type="submit" className="btn form-control btn-primary my-2">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
