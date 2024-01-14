import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/RouteError";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { RoutePath } from "./constants";
import Papers from "./pages/Papers";
import PDFView from "./components/feature/PDFView";

function App() {
  const isUserLoggedIn = true;

  if (!isUserLoggedIn) {
    return (
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path={RoutePath.Login} element={<Login />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path={RoutePath.Home} element={<Home />}>
        <Route path={RoutePath.Papers} element={<Papers />} />
        <Route path={RoutePath.Login} element={<Login />} />
        <Route path={`${RoutePath.Details}/:paperId`} element={<PDFView />} />
      </Route>
    </Routes>
  );
}

export default App;
