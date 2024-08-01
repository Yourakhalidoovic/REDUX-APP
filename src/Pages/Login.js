import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setUser(username));
    // Redirect or update state as needed
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
