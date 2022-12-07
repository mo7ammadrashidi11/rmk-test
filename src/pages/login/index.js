import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/api";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    login(username, password)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/products");
      })
      .catch((error) => {
        setErrorMessage("نام کاربری یا رمز عبور اشتباه است");
      });
  };

  return (
    <div
      className="w-100 vh-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#F6F6F6" }}>
      <div className="bg-white w-50 py-4">
        <div className="row p-4">
          <div className="col border-start">
            <div className="d-flex justify-content-center">
              <img
                src="logo512.png"
                width={300}
                height={300}
                alt="react logo"
              />
            </div>
          </div>

          <div className="col">
            <div className="d-flex flex-column mx-5 mt-5">
              <form onSubmit={onLogin}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    نام کاربری
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    dir="ltr"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    رمز عبور
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    dir="ltr"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary mt-4">
                  ورود به حساب کاربری
                </button>
                <div>
                  <a
                    href="#"
                    className="text-primary text-decoration-none pe-auto"
                    style={{ fontSize: "12px" }}>
                    رمز عبور خود را فراموش کردم
                  </a>
                </div>
                {errorMessage.length > 0 && (
                  <div className="text-danger" style={{ fontSize: "12px" }}>
                    {errorMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
