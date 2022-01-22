import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContex";
import { types } from "../../types/types";

export const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = () => {
    const action = {
      type: types.logged,
      payload: {
        name: "walter",
      },
    };

    dispatch(action);

    const lastpath = localStorage.getItem("lastPath") || "/marvel";
    const searchParams =localStorage.getItem("search");

    if (searchParams) {
      navigate(`search${searchParams}`, { replace: true });
    }

    navigate(lastpath, { replace: true });
  };

  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
