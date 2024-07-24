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
      <div className="containers">
        <div>
          {!isLoggedIn ? (
            <>
              {/* <div className="container">
              <div className="row justify-content-center align-items-center vh-100">
                <div className="col-sm-3"> */}
              <div className="text">
                <h1>Welcome!</h1>
                <p>
                  <em>To continue, enter your name and valid email</em>
                </p>
              </div>
              <form className="formElement" onSubmit={submitThis}>
                <div>
                  <label htmlFor="FirstName">First Name</label>
                  <input
                    type="text"
                    className="formInput"
                    id="FirstName"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="LastName">Last Name</label>
                  <input
                    type="text"
                    className="formInput"
                    id="LastName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
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
                {error && <p style={{ color: "red" }}>{error}</p>}
                <div className="text">
                  <div className="gap">
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
                <div className="gap">
                  <button className="btn btn-primary" type="submit">
                    Sign Up
                  </button>
                </div>
                <div className="text">
                  <p>
                    Already have an account? Login in <Link to="/">here!</Link>
                  </p>
                </div>
              </form>
              {/* </div>
              </div>
            </div> */}
            </>
          ) : (
            <Home UserName={UserName} isLoggedIn={isLoggedIn} logout={logout} />
          )}
        </div>
      </div>
    </>
  );
}

export default NewSignUp;
