import React from "react";
import { Route, Routes } from "react-router-dom";
import Bollywood from "./Contents/Bollywood";
import "./App.css"
import Fitness from "./Contents/Fitness";
import Food from "./Contents/Food";
import Hollywood from "./Contents/Hollywood"
import Technology from "./Contents/Technology"
import Home from "./Contents/Home"
import PageNotFound from "./Contents/PageNotFound";
import { ContextApi } from "./Contents/Api/ContextApi";

import BollywoodView from "./Contents/Bollywood/Bollywood";
import TechnologyView from "./Contents/Technology/Technology";
import HollywoodView from "./Contents/Hollywood/Hollywood";
import FitnessView from "./Contents/Fitness/Fitness";
import FoodView from "./Contents/Food/Food";

const App = () => {
  return (
    <>
      <ContextApi>

      <Routes>
        
        <Route path="/" element={<Home />}></Route>
        <Route  path="/bollywood" element={<Bollywood/>}></Route>
        <Route  path="/bollywood/full" element={<BollywoodView/>}></Route>
        <Route  path="/technology" element={<Technology />}></Route>
        <Route  path="/technology/full" element={<TechnologyView/>}></Route>
        <Route  path="/hollywood" element={<Hollywood />}></Route>
        <Route  path="/hollywood/full" element={<HollywoodView/>}></Route>
        <Route  path="/fitness" element={<Fitness />}></Route>
        <Route  path="/fitness/full" element={<FitnessView />}></Route>
        <Route  path="/food" element={<Food />}></Route>
        <Route  path="/food/full" element={<FoodView />}></Route>
        <Route  path="*" element={<PageNotFound/>}></Route>
      
      </Routes>
      </ContextApi>
    </>
  );
};

export default App;

