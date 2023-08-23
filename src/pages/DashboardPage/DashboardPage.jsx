import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  });

  return <h1>Welcome to the Dashboard!</h1>;
};

export default DashboardPage;
