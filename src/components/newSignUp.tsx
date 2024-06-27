import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";

function newSignUp() {
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
          <h1 className="text-center">Welcome!</h1>
          <p className="text-center">
            <em>To continue, enter your name and valid email</em>
          </p>
          {!isLoggedIn ? (
            <form className="row gx-3 gy-2" onSubmit={submitThis}>
              <div className="form-group">
                <label htmlFor="FirstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="FirstName"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="LastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="LastName"
                  placeholder="Last Name"
                />
              </div>

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

              <div className="align-items-center mt-3 justify-content-center text-center">
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
                      I accept the Terms and Conditions
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-auto mx-auto">
                <button className="btn btn-primary" type="submit">
                  Sign Up
                </button>
              </div>

              <div className="text-center">
                  <p>
                    <small>
                      Already have an account? Login in{" "}
                      <Link to="/">here!</Link>
                    </small>
                  </p>
                </div>
            </form>
          ) : (
            <div>
              <h1 >Hello!</h1>
              <p>Content to be displayed after successfully Signing up</p>
              <button onClick={logout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default newSignUp;
