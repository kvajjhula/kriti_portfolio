import React from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBBtn } from 'mdb-react-ui-kit';
import { Row, Col } from 'react-bootstrap';


export function PlayDate(props) {
    return (
        <div>
            <MDBRow className='playdate-proj-description'>
                <MDBCol className='playdate-title-img' md='4'>
                    <img className='heading-img' src='../img/Playdate/heading_image.webp' />
                </MDBCol>
                <MDBCol md='8'>
                    <div className='playdate-title'>
                        <h1>Playdate</h1>
                        <h2>UW WINFO Hackathon Project</h2>
                        Due to the pandemic, elementary school aged children are no longer able to practice social and developmental skills like they previously could in school settings with their friends, peers, and adult figures. Our app, “Playdate”, bridges this gap in social learning by providing essential features to aid elementary aged children in their growth and development.
                    </div>
                </MDBCol>
            </MDBRow>
            <div className="playdate-details">
                <MDBRow>
                    <MDBCol className="playdate-context" md="6">
                        <h3>Context</h3>
                        <p>
                            The 2022 WINFO Hackathon was a 2 day virtual collegiate hackathon. Every year, they bring together students with diverse skill sets to develop solutions that address a wide array of issues. The theme for 2022 was-- Hacking Forward, Together. I worked alongside other students interested in the informatics major and designing tech solutions that empower those around us to promote equity.</p>
                    </MDBCol>
                    <MDBCol md="6">
                        <MDBRow>
                            <MDBCol className="playdate-result">
                                <h3>Result</h3>
                                <p>At the end of the 2 days, we created a high fidelity prototype using Figma for a mobile application that modeled a solution that addressed all of our goals.</p>
                            </MDBCol>
                            <MDBRow>
                                <MDBCol className="group-members">
                                    <h3>Team</h3>
                                    Kriti Vajjhula, Vega Jethani, Esha Bantwal, Sean Guevarra
                                </MDBCol>
                            </MDBRow>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </div>

            <h1 id="des-process-playdate">Design Process</h1>



            <Row className="playdate-def-container">
                <Col xs={6} className="playdate-def-problem-img">
                    <img src="../img/Playdate/defining_problem.jpg" alt="your-image-description" />
                </Col>
                <Col className="playdate-def-problem-text" xs={6}>
                    <h2>Defining The Problem: COVID-19 and Social Development</h2>
                    <p>
                        Child development experts emphasize the importance of social learning for elementary age children. Being able to interact with other kids of the same age fosters "executive functioning" skills such as impulse control, holding several simultaneous thoughts, and the mental flexibility to problem solve. These skills develop with exposure to peers and having to engage in social interaction. Missing out on social interaction throughout the unexpected closures of schools and other activities have severely limited social development among kids. Learning on a Zoom call cannot nearly encompass the opportunities for social learning that a playground, cafeteria, or classroom can. Even after schools opened up, kids have not been able to interact with each other as much as they have done before.</p>
                </Col>
            </Row>
            <div id="describing-challenge-playdate">
                <h1 id="describing-challenge-playdate-heading">Describing the Challenge</h1>
                <p>As a team, we knew we wanted to create a mobile application to provide a solution to this issue. However, the apparent problem was that online schooling is an unsuitable platform for social learning. How would we be able to transform an interface that inherently facilitates less face-to-face interaction into an experience that allows kids to practice conversational skills, problem-solving, and coexisting with others?</p>
            </div>

            <Row className="user-needs-playdate-container">
                <Col xs={6} className="user-needs-playdate-img">
                    <img className='img-fluid shadow-4' src="../img/Playdate/user-needs.jpg" alt="your-image-description" />
                </Col>
                <Col className="user-needs-playdate-text" xs={6}>
                    <h2>Understanding the User: Addressing User Needs</h2>
                    <p>
                        During the brainstorming process, we identified our target user audience to be elementary school aged kids. However, social development changes drastically from one age bracket to the next making it important to tailor our app to a certain age. We decided to model our prototype around a user completing either 2nd or 3rd grade.

                        Some key skills 2nd and 3rd graders should be able to learn at this stage in their executive functioning development include: </p>
                    <br></br>
                    <ol>

                        <li> How to read cues and/or facial expressions of peers</li>

                        <li> How to ask to join in play </li>

                        <li>How to respond to peers, especially when told no, or when teased </li>

                        <li>How to ask for what they want/need in healthy and productive ways</li>
                    </ol>

                </Col>
            </Row>

            <MDBRow className="dev-sol-playdate-container">
                <MDBCol md="6">
                    <div id="developing-solution-playdate">
                        <h1 id="developing-solution-heading">Developing a Solution</h1>
                        <p>Given a short timeframe, we decided to condense our journey map and low fidelity prototype into a FigJam ideation board. A few key components we were considering including splitting the types of interactions into a “Practice on Your Own” feature and a “Connect with the Class” feature where teachers and students could have a forum to facilitate discussion.</p>
                    </div>
                </MDBCol>
                <MDBCol md="6">
                    <div className="ideation-playdate">
                        <img src="../img/Playdate/ideation-playdate.png" />
                    </div>
                </MDBCol>
            </MDBRow>

            <MDBContainer className='activity-types-playdate'>
                <MDBRow>
                    <h1>Types of Activities</h1>
                    <MDBCol md="4">
                        <h2>Conversations with Class</h2>
                        <img src="../img/Playdate/conv-class.webp" />
                        <p className='act-types-playdate-desc'>Allows the child to interact with peers with a teacher or supervisor to mediate the discussion. They are able to create fun and interesting prompts for the class to talk about and record and submit their responses.</p>
                    </MDBCol>
                    <MDBCol md="4">
                        <h2>Conversation Starters</h2>
                        <img src="../img/Playdate/conv-starters.webp" />
                        <p className='act-types-playdate-desc'>Gives ideas for different scenarios to facilitate casual conversation with other peers. This feature also allows the user to practice and record and save their responses.</p>
                    </MDBCol>
                    <MDBCol md="4">
                        <h2>Navigate Through a Story</h2>
                        <img src="../img/Playdate/nav-story.webp" />
                        <p className='act-types-playdate-desc'>Presents the user with a social scenario in which they have to identify emotion cues, show ability to empathize and respond to a social situation appropriately.</p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <h1 id="sel-screens-playdate">Selected Screens</h1>

            <MDBRow className='playdate-carousel'>
                <MDBCol md="2">
                    <img src='../img/Playdate/carousel-1.webp' title='carousel-1' />
                </MDBCol>
                <MDBCol md="2">
                    <img src='../img/Playdate/carousel-2.webp' title='carousel-2' />
                </MDBCol>
                <MDBCol md="2">
                    <img src='../img/Playdate/carousel-3.webp' title='carousel-3' />
                </MDBCol>
                <MDBCol md="2">
                    <img src='../img/Playdate/carousel-4.webp' title='carousel-4' />
                </MDBCol>
                <MDBCol md="2">
                    <img src='../img/Playdate/carousel-5.webp' title='carousel-5' />
                </MDBCol>
            </MDBRow>


            <div id="final-sol-playdate">
                <h1 id="final-sol-playdate-heading">Final Components</h1>
                <p>PlayDate has two main components that allow students to engage with the learning content and interact with their peers; “Practice on Your Own” and “Connect with your Class”. The “Practice on Your Own” allows students to practice cues, responses, and facial expressions and engage in voice incorporated tasks/games individually, earning points as they go. The Connect with your Class allows teachers to monitor student’ live interactions via discussion posts.</p>
                <div className="d-flex align-items-center playdate-button-prototype-div">
                    <MDBBtn color="primary" className="mx-auto" href="https://www.figma.com/proto/Ml8naDrZoGdohDDoa2nAtc/WINFO-Hack?node-id=0%3A1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=9%3A2">
                        View Prototype
                    </MDBBtn>
                </div>
            </div>
        </div >
    )
}