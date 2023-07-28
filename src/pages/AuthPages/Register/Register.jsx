import React from "react";
import RegisterForm from "../../../components/AuthComponents/registerForm";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container-fluid">
      <h1 className="display-1 my-5 text-center">Register</h1>
      <div className="row">
        <div className="col-md-6 mx-auto my-5">
          <RegisterForm />
          <Link to="/login" className="ms-auto">
            Already member? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
