import GlobalStyle from "./assets/styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home/index";
import UserContext from "./contexts/UserContext";

function App() {
  const [token, setToken] = useState("");

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ token, setToken }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
