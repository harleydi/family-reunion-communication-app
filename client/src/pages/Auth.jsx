import { useState } from "react";
import { login, register } from "../api/Api";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [loginForm, setLoginForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const onRegisterSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    await register(data);
    
  };

  const onLoginSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    await login(data);
    navigate('/home')
  };
  return (
    <div>
      {loginForm ? (
        <div className="form-div">
          <form className="form" onSubmit={onLoginSubmit}>
            <span className="input-span">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>
            <span className="input-span">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </span>
            <span className="span">
              <a href="#">Forgot password?</a>
            </span>
            <input className="submit" type="submit" value="Log in" />
            <span className="span">
              Don't have an account?{" "}
              <a href="#" onClick={() => setLoginForm(false)}>
                Sign up
              </a>
            </span>
          </form>
        </div>
      ) : (
        <div className="form-div">
          <form className="form" onSubmit={onRegisterSubmit}>
            <h2>Sign Up Form</h2>
            <span className="input-span">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>
            <span className="input-span">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </span>
            <input className="submit" type="submit" value="Sign Up" />
            <br />
            <span className="span">
              Already have an account?{" "}
              <a href="#" onClick={() => setLoginForm(true)}>
                Log in
              </a>
            </span>
          </form>
        </div>
      )}
    </div>
  );
};
export default Auth;
