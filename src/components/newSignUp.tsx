import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "./pages/home";

function NewSignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [UserName, setuserName] = useState<string>("");
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const submitThis = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic email validation
    const validateEmail = (email: string) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };

    // Validate email format
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Validate password length
    if (passwd.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Successful login
    setIsLoggedIn(true);
    setuserName(email);
    navigate("/home");
  };

  // Logout
  const logout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPasswd("");
    setError("");
  };

  return (
    <>
      {!isLoggedIn ? (
        <>
          <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
              <div className="col-sm-3">
                <h1 className="text-center">Welcome!</h1>
                <p className="text-center">
                  <em>To continue, enter your name and valid email</em>
                </p>
                <form className="row gx-3 gy-2" onSubmit={submitThis}>
                  <div className="form-group">
                    <label htmlFor="FirstName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="FirstName"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="LastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="LastName"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="UserName">User Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="UserName"
                      placeholder="User Name"
                      value={UserName}
                      onChange={(e) => setuserName(e.target.value)}
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
              </div>
            </div>
          </div>
        </>
      ) : (
        <Home UserName={UserName} isLoggedIn={isLoggedIn} logout={logout} />
      )}
    </>
  );
}

export default NewSignUp;
