import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import MeatConsumptionCountry from "./components/DataAnalysis/MeatConsumptionCountry";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/meat_consumption" element={<MeatConsumptionCountry />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;