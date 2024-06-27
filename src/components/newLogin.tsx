import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";

function newLogin() {
  const [email, setEmail] = useState<string>("");
  const [passwd, setPasswd] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

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
    alert("Welcome, " + email + "!");
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
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-sm-3">
          
          {!isLoggedIn ? (
            <div>
                <h1 className="text-center">Welcome!</h1>
                <p className="text-center">
                  <em>Please enter valid email and password to continue</em>
                </p>
                <form
                  className="row gx-3 gy-2 align-items-center"
                  onSubmit={submitThis}
                >
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      value={passwd}
                      onChange={(e) => setPasswd(e.target.value)}
                    />
                  </div>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                  <div className="row align-items-center mt-3 justify-content-center">
                    <div className="col-auto">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="autoSizingCheck2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="autoSizingCheck2"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-auto">
                      <button className="btn btn-primary" type="submit">
                        Login
                      </button>
                    </div>
                    <div className="text-center">
                      <p>
                        <small>
                          Don't have an account? Sign up{" "}
                          <Link to="/signup">here!</Link>
                        </small>
                      </p>
                    </div>
                  </div>
                </form>
            </div>
          ) : (
            <div className="text-center">
              <h1>Hello!</h1>
              <p>Content to be displayed after successful login.</p>
              <button className="btn btn-secondary" onClick={logout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default newLogin;
