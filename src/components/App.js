import React from 'react';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { NavBar } from '../components/Nav.js';
import { HomePage } from '../components/Home.js';
import { ProjectsPage } from '../components/Projects.js';
import { GuppyProject } from './Guppy';
import { VRMap } from './VRMap.js';
import { PlantParenthood } from './PlantParenthood.js';
import { PlayDate } from './PlayDate.js';
import { VCD } from './VCD.js'


export default function App(props) {

  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Projects" element={<ProjectsPage projects={props.projects}/>} />
          <Route path="/Guppy" element={<GuppyProject/>} />
          <Route path="/PlantParenthood" element={<PlantParenthood/>} />
          <Route path="/PlayDate" element={<PlayDate/>} />
          <Route path="/VRMap" element={<VRMap/>} />
          <Route path="/VCD" element={<VCD/>} />
        </Routes>
      </div>
    </div>
  );
}