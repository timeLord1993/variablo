import { Routes, Route, Link, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Group from "./pages/Group";
import Like from "./pages/Like";
import Login from "./pages/Login";

// 主页布局
const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/group" element={<Group />} />
          <Route path="/like" element={<Like />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
