import React, { useState } from "react";
import "./Auth.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { ReactComponent as Password } from "./password.svg";
import axios from "axios";

function Auth({ getTokenHandler }) {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(true);

  const AuthHandler = async () => {
    const axiosPost = await axios.post("https://hackaton-8i99.onrender.com/api/admin/auth", {
      phone: value,
      password: password,
    });
    if (axiosPost) {
      window.sessionStorage.setItem("token", axiosPost.data.token);
      getTokenHandler();
    }
  };

  return (
    <div className="Auth">
      <div className="Auth__item">
        <h1>Auth</h1>
        <form>
          <div className="label_input">
            <PhoneInput
              international
              defaultCountry="UZ"
              className="input"
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
            />
          </div>
          <div className="label_input password">
            <span>
              <Password />
            </span>{" "}
            <input
              type={eye ? "password" : "text"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {eye ? (
              <span
                role="img"
                aria-label="monkey"
                className="monkey"
                onClick={(e) => {
                  setEye(!eye);
                }}
              >
                🐵
              </span>
            ) : (
              <span
                role="img"
                aria-label="monkey"
                className="monkey"
                onClick={(e) => {
                  setEye(!eye);
                }}
              >
                🙈
              </span>
            )}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              AuthHandler();
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
