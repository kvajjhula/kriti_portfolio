import React from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBBtn } from 'mdb-react-ui-kit';

export function VRMap(props) {
    return (
        <div className='vr-proj-description'>
            <MDBRow className="vr-intro">
                <MDBCol className="vr-intro-img" md="6">
                    <img src="../img/VR/foundry-top-img.png" />
                </MDBCol>
                <MDBCol md="6">
                    <div className="vr-intro-text">
                        <h1>Foundry10 VR Learning Map</h1>
                        <h2>Individual Internship Project</h2>
                        <p>The Foundry10 VR Learning Map is an interactive map web plugin that visualizes educational VR immersive experiences in the Seattle metro area as a resource for local educators to introduce VR to students
                        </p>
                    </div>
                </MDBCol>
            </MDBRow>

            <MDBRow className="vr-context">
                <MDBCol md='8'>
                    <div className='pb-3'>
                        <h2>Context</h2>
                        <p>The VR Learning Map was my primary project while working as an education technology intern at education research organization Foundry10 during the summer and fall of 2022. I worked on the edtech team which engaged in the research, programming and collaborative philanthropy across many different kinds of technologies used in education. I did research with VR hardware, software and emerging technologies like XR and adaptive learning. For this project, I worked primarily with educational VR. Although I completed this project individually, I worked alongside another intern to do preliminary research into the problem space.</p>

                        {/* The project goal was open ended towards the beginning and I was given a lot of creative freedom with the solutions and resources I could design.  */}
                    </div>
                    <MDBRow>
                        <MDBCol md='6'>
                            <h2>Type/Timeline</h2>
                            <p>Product Design<br />Web Design<br />7 months</p>
                        </MDBCol>
                        <MDBCol md='6'>
                            <h2>Roles</h2>
                            <p>User Research, Interface Design, Data Visualization, UX Design</p>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol md='4' className="vr-result">
                    <h2>Result</h2>
                    <p>By the end of 7 months I designed and helped develop an interactive map web plugin with Figma and Tableau that visualizes educational VR immersive experiences in Seattle as a resource for local educators to introduce VR to students.</p>
                </MDBCol>
            </MDBRow>

            <h1 id="des-process-vr">Design Process</h1>

            <MDBRow>
                <div id="vr-map-img">
                    <img src="../img/VR/vr-map-img.png" />
                </div>
            </MDBRow>

                <div id="problem-def-vr">
                    <h2>Defining the Problem</h2>
                    <p>Because the pandemic caused such a large shift in classroom learning in recent years, we wanted to identify any new trends in VR and education and figure out how to tackle the existing gaps in VR learning.</p>
                </div>











            {/* <MDBBtn color="primary" className="mx-auto" href="https://www.foundry10.org/vr-learning-map">
                View Prototype
            </MDBBtn> */}

        </div>
    )
}