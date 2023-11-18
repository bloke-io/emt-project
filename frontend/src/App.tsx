import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/RouteError";

function App() {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<h1>Home</h1>} />
    </Routes>
  );
}

export default App;
