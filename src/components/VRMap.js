import React from 'react';
import { MDBRow, MDBCol, MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

export function VRMap(props) {
    return (
        <div>
            <MDBContainer style={{ paddingTop: '5rem', width: '75%' }}>
                <MDBRow className='align-items-center text-center'>
                    <MDBCol md='12' className='text-center'>
                        <h1 style={{ width: '70%', margin: '0 auto' }}>Mapping Virtual Realities: Enhancing Educational Experiences in Seattle through VR Technology
                        </h1>
                        <p className='subheading' style={{ marginTop: '2rem', marginBottom: '3rem' }}> Foundry10 ✴ Product Design ✴ Summer 2022 - Winter 2022 ✴ Figma + Tableau</p>

                        <img
                            src='../img/VR/figmascreen.png'
                            alt='Project'
                            style={{ width: '70%', height: 'auto', borderRadius: '1rem', marginBottom: '1rem', WebkitFilter: 'drop-shadow(5px 5px 5px #666666)' }}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md='12' >
                        <div style={{ marginTop: '5rem', marginBottom: '2.5rem' }}>
                            <h1 className='h1-sub'>Context</h1>
                            <h2>Foundry10: Integrating VR into Educational Practices</h2>
                            <p>
                                During my internship at Foundry10, an educational research organization, I embarked on a project to visualize educational VR experiences within the Seattle area. This project spanned the summer and fall of 2022, where I focused on VR hardware, software, and emerging technologies such as XR and adaptive learning as part of the edtech team. The VR Learning Map was developed to serve as an interactive web plugin, providing a vital resource for local educators to introduce VR technology to students. This initiative not only allowed me to delve deeply into user research and interface design but also to apply these skills towards enhancing VR's accessibility and educational potential in a real-world setting.
                            </p>
                        </div>


                        <div style={{ marginTop: '5rem', marginBottom: '2.5rem' }}>
                            <h1 className='h1-sub'>Defining the Problem</h1>
                            <h2>Navigating New Realities: Addressing Shifts in VR Education Post-Pandemic</h2>
                            <p>
                                Because the pandemic caused such a large shift in classroom learning in recent years, we wanted to identify any new trends in VR and education and figure out how to tackle the existing gaps in VR learning.
                            </p>
                        </div>

                        <div style={{ marginTop: '5rem', marginBottom: '2.5rem' }}>
                            <h1 className='h1-sub'>Primary and Secondary Research</h1>
                            <h2>Synthesizing Diverse VR Research to Enhance Educational Strategies</h2>
                            <p>
                                We started with studying the company's white papers, formal research papers, as well as foundry10 reports from implementing virtual reality in classrooms across the country in recent years. In addition, I coded student and teacher interview transcripts from past studies and looked for common themes in the responses. In addition, to become more familiar with the VR/AR/XR space, I tested a variety of softwares and headsets. We worked on creating software reviews for educators to reference and evaluate whether or not they would be useful in a classroom environment.
                            </p>
                        </div>

                        <div style={{ marginTop: '5rem', marginBottom: '2.5rem' }}>
                            <h1 className='h1-sub'>Pain Points and Opportunities</h1>
                            <h2>Synthesizing Diverse VR Research to Enhance Educational Strategies</h2>
                            <p>
                                Based on our interview coding and thorough white paper research, my colleague and I identified our stakeholders' pain points, opportunities and goals.
                            </p>
                        </div>
                        <div className='text-center'>
                            <img src="../img/VR/pain-points.jpg"
                                alt='Project'
                                style={{ width: '70%', height: 'auto', borderRadius: '1rem', marginBottom: '1rem' }} />

                        </div>
                        <div style={{ marginTop: '5rem', marginBottom: '2.5rem' }}>
                            <h1 className='h1-sub'>Outlining Challenges and Goals</h1>
                            <h2>Navigating Resource Limitations and Technical Support Challenges</h2>
                            <p>
                                Preliminary research revealed that effectively learning to use VR in education requires extensive hands-on experience. However, the limited number of headsets in classrooms restricts students' ability to explore VR thoroughly, while acquiring more headsets can be cost-prohibitive. Consequently, a primary goal of this project was to overcome these cost barriers and expand exposure to diverse VR applications, enhancing students' familiarity with the technology.

                                Another significant challenge involved the reluctance of school district IT departments to support new technologies, which often left teachers without necessary technical assistance for VR setups. To address this, we aimed to streamline the VR learning process, reducing the setup time and resource investment needed for educators and students to become proficient with VR technologies.
                            </p>
                        </div>
                        <h1 className='text-center' style={{ marginBottom: '5rem' }}>Goals</h1>
                        <MDBRow className='text-center'>
                            <MDBCol md="4" >
                                <img src="../img/VR/icon-1.png" height='50%' style={{ marginBottom: '3rem' }} />
                                <h2>Encourage VR Subject Exploration</h2>
                            </MDBCol>
                            <MDBCol md="4">
                                <img src="../img/VR/icon-2.png" height='50%' style={{ marginBottom: '3rem' }} />
                                <h2>Low-Cost Introduction to VR</h2>
                            </MDBCol>
                            <MDBCol md="4">
                                <img src="../img/VR/icon-3.png" height='50%' style={{ marginBottom: '3rem' }} />
                                <h2>Improve Learning Curve</h2>
                            </MDBCol>
                        </MDBRow>
                        <div style={{ marginTop: '5rem', marginBottom: '2.5rem' }}>
                            <h1 className='h1-sub'>Ideation</h1>
                            <h2>Developing an Accessible VR Learning Tool</h2>
                            <p>
                                During the brainstorming stage, a lot of my basic designs depicted a resource, or a product that was informational and prompted the target audience to go out and do their own exploration with VR after being given guidance. Since many teachers and educators reference the foundry10 website for learning resources, I wanted to design a VR learning resource to add to the website. I wanted to address the goals I outlined by creating a way for students, educators, and parents to try out VR near them.
                            </p>
                        </div>
                        <div style={{ marginTop: '5rem', marginBottom: '2.5rem' }}>
                            <h1 className='h1-sub'>Determining the Features</h1>
                            <h2>Enhancing Educational Engagement Through Interactive VR Maps</h2>
                            <p>
                                To meet the established objectives, I aimed to develop a solution that would facilitate VR exploration beyond the classroom, enabling students to participate in a diverse array of VR activities. After several iterations, I decided on a key feature: an interactive map displaying VR exhibits across the Seattle area. Preliminary research helped me identify a variety of local exhibits, including those focused on art, astronomy, marine science, and VR gaming centers, showcasing the broad spectrum of subjects that VR can bring to life.
                            </p>
                        </div>
                        <div className='text-center'>
                            <img src="../img/VR/vr-demo.gif" style={{ width: '60rem' }} />
                        </div>
                        <h2 className='text-center'>Final Prototype and Handoff</h2>
                        <p> The final prototype was built with Figma. The map plugin was built with Tableau and was embedded into the company's web application. Try it out below <span class="emoji">✰</span></p>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="justify-content-center" style={{ paddingBottom:'5rem' }}>
                    <MDBCol size="auto" className="mx-2">
                        <Button variant="primary" size='lg' href="https://www.foundry10.org/vr-learning-map">View Live Site</Button>
                    </MDBCol>
                    <MDBCol size="auto" className="mx-2">
                        <Button variant="outline-secondary" size='lg' href="https://www.figma.com/proto/e5POjo1aNSN6MUuRV25p4f/Final-Version?scaling=min-zoom&page-id=0%3A1&node-id=2%3A2&starting-point-node-id=2%3A2">View Prototype</Button>
                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </div>
    )
}



<div className='vr-proj-description'>
    <MDBRow className="vr-intro">
        <MDBCol className="vr-intro-img" md="6">
            <a href='https://www.foundry10.org/vr-learning-map'>
                <img src="../img/VR/figmascreen.png" />
            </a>
        </MDBCol>
        <MDBCol md="6">
            <div className="vr-intro-text">
                <h1>Foundry10 VR Learning Map</h1>
                <h2>Individual Internship Project</h2>
                <p>The Foundry10 VR Learning Map is an interactive map web plugin that visualizes educational VR immersive experiences in the Seattle metro area as a resource for local educators to introduce VR to students
                    <br />
                    <br />

                </p>
            </div>
            <div className='button-box'>
                <Button variant="primary" size='lg' href="https://www.foundry10.org/vr-learning-map">View Live Site</Button>
                <Button variant="outline-secondary" size='lg' href="https://www.figma.com/proto/e5POjo1aNSN6MUuRV25p4f/Final-Version?scaling=min-zoom&page-id=0%3A1&node-id=2%3A2&starting-point-node-id=2%3A2">View Prototype</Button>
            </div>
            <br />
        </MDBCol>
    </MDBRow>

    <MDBRow className="vr-context">
        <MDBCol md='6'>
            <div className='pb-3'>
                <h2>Context</h2>
                <p>The VR Learning Map was my primary project while working as an education technology intern at education research organization Foundry10 during the summer and fall of 2022. I worked on the edtech team which engaged in the research, programming and collaborative philanthropy across many different kinds of technologies used in education. I did research with VR hardware, software and emerging technologies like XR and adaptive learning. For this project, I worked primarily with educational VR. Although I completed this project individually, I worked alongside another intern to do preliminary research into the problem space.</p>



                <h2>Roles</h2>
                <p>User Research, Interface Design, Data Visualization, UX Design</p>

                {/* The project goal was open ended towards the beginning and I was given a lot of creative freedom with the solutions and resources I could design.  */}
            </div>

        </MDBCol>
        <MDBCol md='6' className="vr-result">
            <h2>Result</h2>
            <p>By the end of 7 months I designed and helped develop an interactive map web plugin with Figma and Tableau that visualizes educational VR immersive experiences in Seattle as a resource for local educators to introduce VR to students.</p>

            <h2>Type/Timeline</h2>
            <p>Product Design<br />Web Design<br />7 months</p>

        </MDBCol>

    </MDBRow>

    <h1 className="des-process">Design Process</h1>

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

</div>