import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/auth/login";
import Registration from "./pages/auth/registration";
import Home from "./pages/dashboard/Home";
import Profile from "./pages/dashboard/Profile";
import { pageUrls } from "./utils/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pageUrls.loginPage} element={<Login />} />
        <Route path={pageUrls.registrationPage} element={<Registration />} />

        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={pageUrls.profilePage} element={<Profile />} />
        </Route>

        <Route path={pageUrls.pageNotFound} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
