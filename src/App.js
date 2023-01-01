import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Discoverypage from "./pages/Discoverypage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/discover" element={<Discoverypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
