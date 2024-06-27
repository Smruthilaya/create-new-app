import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NewLogin from "./components/newLogin";
import NewSignUp from "./components/newSignUp";

function App() {
  return (
    <BrowserRouter>
      <div>

        <Routes>
          <Route index element={<NewLogin />} />
          <Route path="/signup" element={<NewSignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
