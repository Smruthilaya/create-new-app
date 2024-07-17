import { useNavigate } from "react-router-dom";

interface HomeProps {
  UserName: string;
  isLoggedIn: boolean;
  logout: () => void;
}

function Home({ UserName, isLoggedIn, logout }: HomeProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <>
      <div className="container-fluid d-flex flex-column align-items-center justify-content-center vh-100">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="text-center">
            <>
              <h1>Hello! {UserName}</h1>
              <>
                <p>Content to be displayed after successful login.</p>
                <button className="btn btn-secondary" onClick={handleLogout}>
                  Logout
                </button>
              </>
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
