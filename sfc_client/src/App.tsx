import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import MeatConsumptionCountry from "./components/DataAnalysis/MeatConsumptionCountry";
import TweetTrend from "./components/DataAnalysis/TweetTrend";
import WarEffect from "./components/DataAnalysis/WarEffect";
import HousingPrice from "./components/FuturePrediction/HousingPrice";
import WeatherForecast from "./components/FuturePrediction/WeatherForecast";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/data_analysis/meat_consumption" element={<MeatConsumptionCountry />} />
          <Route path="/data_analysis/tweet_trend" element={<TweetTrend />} />
          <Route path="/data_analysis/war_effect" element={<WarEffect />} />
          <Route path="/future_prediction/housing_price" element={<HousingPrice />} />
          <Route path="/future_prediction/weather_forecast" element={<WeatherForecast />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;