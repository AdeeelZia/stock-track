import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
export default function App() {
  return (
    <div className="main-wrapper bg-black overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
