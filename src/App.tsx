import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NewLogin from "./components/newLogin";
import NewSignUp from "./components/newSignUp";
import Home from "./components/pages/home";
import Sidebar from "./components/Sidebar";
import Men from "./components/pages/Men";
import ClothingAccessories from "./components/pages/ClothingAccessories";
import Orders from "./components/pages/Orders";
import Contact from "./components/pages/Contact";
import Woman from "./components/pages/Women";
import Formals from "./components/pages/Formals";
import Casuals from "./components/pages/Casuals";
import Accessories from "./components/pages/Accessories";
import Completed from "./components/pages/Completed";
import Pending from "./components/pages/Pending";

function App() {
  const [UserName, setUserName] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<NewLogin />} />
        <Route path="/signup" element={<NewSignUp />} />

        <Route element={<Sidebar />}>
          <Route
            path="/home"
            element={
              <Home
                UserName={UserName}
                isLoggedIn={isLoggedIn}
                logout={handleLogout}
              />
            }
          />
          <Route path="/clothing-accessories">
            <Route index element={<ClothingAccessories />} />
            <Route path="/clothing-accessories/men">
              <Route index element={<Men />} />
              <Route
                path="/clothing-accessories/men/formals"
                element={<Formals />}
              />
              <Route
                path="/clothing-accessories/men/casuals"
                element={<Casuals />}
              />
              <Route
                path="/clothing-accessories/men/accessories"
                element={<Accessories />}
              />
            </Route>
            <Route path="/clothing-accessories/women">
              <Route index element={<Woman />} />
              <Route
                path="/clothing-accessories/women/formals"
                element={<Formals />}
              />
              <Route
                path="/clothing-accessories/women/dresses"
                element={<Casuals />}
              />
              <Route
                path="/clothing-accessories/women/accessories"
                element={<Accessories />}
              />
            </Route>
          </Route>
          <Route path="/orders">
            <Route index element={<Orders />} />
            <Route path="/orders/completed" element={<Completed />} />
            <Route path="/orders/pending" element={<Pending />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
