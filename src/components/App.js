import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from '../components/Nav.js';
import { HomePage } from '../components/Home.js';
import { VRMap } from './VRMap.js';
import { PlantParenthood } from './PlantParenthood.js';
import { PlayDate } from './PlayDate.js';
import { VCD } from './VCD.js'
import { MenstrualHealth } from './MenstrualHealth.js';
import { Pomegranate } from './Pomegranate.js';


export default function App(props) {

  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/Projects" element={<ProjectsPage/>} /> */}
          <Route path="/PlantParenthood" element={<PlantParenthood/>} />
          <Route path="/PlayDate" element={<PlayDate/>} />
          <Route path="/VRMap" element={<VRMap/>} />
          <Route path="/VCD" element={<VCD/>} />
          <Route path="/MenstrualHealth" element={<MenstrualHealth/>} />
          <Route path="/Pomegranate" element={<Pomegranate/>} />


        </Routes>
      </div>
    </div>
  );
}