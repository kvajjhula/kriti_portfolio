import React from 'react';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { NavBar } from '../components/Nav.js';
import { HomePage } from '../components/Home.js';
import { ProjectsPage } from '../components/Projects.js';

export default function App(props) {

  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Projects" element={<ProjectsPage projects={props.projects}/>} />
        </Routes>
      </div>
    </div>
  );
}