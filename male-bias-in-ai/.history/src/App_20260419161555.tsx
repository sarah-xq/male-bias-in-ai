import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { PersonalFindings } from "./pages/PersonalFindings";
import { Papers } from "./pages/Papers";
import { Disclaimer } from "./pages/Disclaimer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/findings" element={<PersonalFindings />} />
        <Route path="/research" element={<Papers />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="*" element={<p>Invalid URL</p>} />
      </Route>
    </Routes>
  );
}

export default App;
