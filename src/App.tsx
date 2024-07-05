import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewLogin from "./components/newLogin";
import NewSignUp from "./components/newSignUp";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <Router>
      <Sidebar/>
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-sm-3">
            <Routes>
              <Route index element={<NewLogin />} />
              <Route path="/signup" element={<NewSignUp />} />          
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
