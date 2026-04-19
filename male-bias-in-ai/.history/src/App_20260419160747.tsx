import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<p>Invalid URL</p>} />
      </Route>
    </Routes>
  );
}

export default App;
