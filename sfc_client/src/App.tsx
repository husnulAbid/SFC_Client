import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import MeatConsumptionCountry from "./components/DataAnalysis/MeatConsumptionCountry";
import TweetTrend from "./components/DataAnalysis/TweetTrend";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/data_analysis/meat_consumption" element={<MeatConsumptionCountry />} />
          <Route path="/data_analysis/tweet_trend" element={<TweetTrend />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;