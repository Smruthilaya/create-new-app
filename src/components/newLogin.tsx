import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "./pages/home";

function newLogin() {
  const [UserName, setuserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [passwd, setPasswd] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const submitThis = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic email validation
    const validateEmail = (email: string) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };

    //validate email format
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    //validate password length
    if (passwd.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    //successful login
    setIsLoggedIn(true);
    setuserName(email);
    navigate("/home");
  };

  //logout
  const logout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPasswd("");
    setError("");
  };

  // Render login form or content after successful login
  return (
    <>
      {/* <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-sm-3"> */}
      <div className="containers">
        <div>
          {!isLoggedIn ? (
            <>
              <div className="text">
                <h1>Welcome!</h1>
                <p>
                  <em>Please enter valid email and password to continue</em>
                </p>
              </div>

              <form className="formElement" onSubmit={submitThis}>
                <div>
                  <label htmlFor="UserName">User Name</label>
                  <input
                    type="text"
                    className="formInput"
                    id="UserName"
                    placeholder="User Name"
                    value={UserName}
                    onChange={(e) => setuserName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="formInput"
                    id="exampleInputEmail1"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="formInput"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={passwd}
                    onChange={(e) => setPasswd(e.target.value)}
                  />
                </div>
              </form>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <div className="text">
                <div className="gap">
                  <input type="checkbox" id="autoSizingCheck2" />
                  <label className="formCheck" htmlFor="autoSizingCheck2">
                    Remember me
                  </label>
                </div>
                <div className="gap">
                  <button className="btn btn-primary" type="submit">
                    Login
                  </button>
                </div>
                <div className="text">
                  <p>
                    Don't have an account? Sign up{" "}
                    <Link to="/signup">here!</Link>
                  </p>
                </div>
              </div>
            </>
          ) : (
            <Home UserName={UserName} isLoggedIn={isLoggedIn} logout={logout} />
          )}
        </div>
      </div>
      {/* </div>
        </div>
      </div> */}
    </>
  );
}

export default newLogin;
