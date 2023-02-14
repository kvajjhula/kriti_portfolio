import React from 'react';
import { MDBRow, MDBCol, MDBBtn, MDBContainer } from 'mdb-react-ui-kit';

export function VRMap(props) {
    return (
        <div className='vr-proj-description'>
            <MDBRow className="vr-intro">
                <MDBCol className="vr-intro-img" md="6">
                    <img src="../img/VR/figmascreen.png" />
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

            <div id="vr-map-img">
                {/* <img src="../img/VR/vr-map-img.png" /> */}
                <img src="../img/VR/vr-demo.gif" />
            </div>

            <div className="des-process-description">
                <h2>Defining the Problem</h2>
                <p>Because the pandemic caused such a large shift in classroom learning in recent years, we wanted to identify any new trends in VR and education and figure out how to tackle the existing gaps in VR learning.</p>
            </div>

            <div className="des-process-description">
                <h2>Collecting Information</h2>
                <p>We started with studying the company’s white papers, formal research papers, as well as foundry10 reports from implementing virtual reality in classrooms across the country in recent years. In addition, I coded student and teacher interview transcripts from past studies and looked for common themes in the responses. In addition, to become more familiar with the VR/AR/XR space, I tested a variety of softwares and headsets. We worked on creating software reviews for educators to reference and evaluate whether or not they would be useful in a classroom environment.
                </p>
            </div>

            <div className="des-process-description">
                <h2>Empathize</h2>
                <p>Based on the research into company research archives, my colleague and I identified the target audience and their main pain points.</p>
                <div id="empathize-img">
                    <img src="../img/VR/pain-points.jpg" />
                </div>
            </div>

            <div className="des-process-description">
                <h2>Outlining Challenges and Goals</h2>
                <p>After preliminary research, I saw that the most commonly reported way (by students and teachers) to understand how to use VR and get the most out of it is by increasing the amount of time exploring it.  However, in a classroom setting, students must share headsets, meaning less time spent getting familiar with all of its features. Increasing the amount of headsets also gets pricey. Therefore, one of the goals of this project was to find a way to reduce the cost barrier to try VR while increasing subject area exposure in VR to get students familiar with the different ways that it can be used.
                    <br />
                    <br />
                    Another key challenge reported by teachers was that school district IT departments were often apprehensive about providing support for new technologies. Teachers that use VR often have to take out extra time to set up and use their devices, with little external tech support. As a result, another key goal that I outlined was to improve the learning curve for both teachers and students to navigate VR and become more familiar with it before actually investing large amounts of time and money.
                </p>
            </div>


            <MDBContainer className='goals-container-vr'>
                <h1>Goals</h1>
                <MDBRow>
                    <MDBCol md="4">
                        <img src="../img/VR/icon-1.png" />
                        <h2>Encourage VR Subject Exploration</h2>
                    </MDBCol>
                    <MDBCol md="4">
                        <img src="../img/VR/icon-2.png" />
                        <h2>Low-Cost Introduction to VR</h2>
                    </MDBCol>
                    <MDBCol md="4">
                        <img src="../img/VR/icon-3.png" />
                        <h2>Improve Learning Curve</h2>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <div className="des-process-description">
                <h2>Ideation</h2>
                <p>During the brainstorming stage, a lot of my basic designs depicted a resource, or a product that was informational and prompted the target audience to go out and do their own exploration with VR after being given guidance. Since many teachers and educators reference the foundry10 website for learning resources, I wanted to design a VR learning resource to add to the website. I wanted to address the goals I outlined by creating a way for students, educators, and parents to try out VR near them.
                </p>
            </div>

            <div className="des-process-description">
                <h2>Determining the Features</h2>
                <p>To address the outlined goals, I wanted to design a solution that promotes VR exploration outside of school so that students would be able to engage in a variety of VR activities. After a few iterations, I settled on the central feature being a map that shows VR exhibits in the Seattle area. After some preliminary research, I found local exhibits ranging from art, astronomy, marine science, as well as VR gaming centers that could demonstrate the wide range of subjects that are supported by the technology.
                </p>
            </div>

            <div className="des-process-description">
                <h2>Final Solution</h2>
                {/* <p> After creating the final Figma prototype in Figma
                </p> */}
            </div>






            <div className='d-flex'>
                <MDBBtn color="primary" className="mx-auto" href="https://www.foundry10.org/vr-learning-map">
                    View Live Site!
                </MDBBtn>
                <MDBBtn color="primary" className="mx-auto" href="https://www.figma.com/proto/e5POjo1aNSN6MUuRV25p4f/Final-Version?scaling=min-zoom&page-id=0%3A1&node-id=2%3A2&starting-point-node-id=2%3A2">
                    View Prototype!
                </MDBBtn>
            </div>
        </div>
    )
}