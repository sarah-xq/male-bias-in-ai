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
        <Route path="/male-bias-in-ai" element={<Home />} />
        <Route
          path="/male-bias-in-ai/personal-findings"
          element={<PersonalFindings />}
        />
        <Route path="/male-bias-in-ai/research" element={<Papers />} />
        <Route path="/male-bias-in-ai/disclaimer" element={<Disclaimer />} />
        <Route path="*" element={<p>Invalid URL</p>} />
      </Route>
    </Routes>
  );
}

export default App;
