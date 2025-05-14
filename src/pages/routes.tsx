import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/login/Login";

export default function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
