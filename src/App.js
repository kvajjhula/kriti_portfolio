import React from 'react';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { NavBar } from './Nav.js';
import { HomePage } from './Home.js';
import { ProjectsPage } from './Projects.js';

export default function App(props) {
  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Projects" element={<ProjectsPage/>} />
        </Routes>
      </div>
    </div>
  );
}