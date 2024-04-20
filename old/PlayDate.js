import React from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBBtn } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';



export function PlayDate(props) {
    return (
        <div>
            <MDBRow className='playdate-proj-description'>
                <MDBCol className='playdate-title-img' md='4'>
                    <img className='heading-img' src='../img/Playdate/navigate-through-story.png' />
                </MDBCol>
                <MDBCol md='8'>
                    <div className='playdate-title'>
                        <h1>Playdate</h1>
                        <h2>UW WINFO Hackathon Project</h2>
                        Due to the pandemic, elementary school aged children are no longer able to practice social and developmental skills like they previously could in school settings with their friends, peers, and adult figures. Our app, “Playdate”, bridges this gap in social learning by providing essential features to aid elementary aged children in their growth and development.
                    </div>
                    <br/>
                    <br/>
                    <div className='button-box'>
                        <Button variant="primary" size='lg' href="https://www.figma.com/proto/lCc9WGftRnmC7Z52bB0XOZ/WINFO-Hack-(Copy)?node-id=353-827&scaling=scale-down&page-id=0%3A1&starting-point-node-id=353%3A827">View Prototype</Button>
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
                                <p>At the end of the 2 days, we created a high fidelity prototype using Figma for a mobile application that modeled a solution that addressed all of our goals. However, all of the screens that are currently displayed are the result of a dramatic redesign that I took on a year after the hackathon ended. The original as well as the new and improved version are both shown in the following case study.</p>
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

            <h1 className="des-process">Design Process</h1>


            {/* <MDBRow className='playdate-carousel'>
                <img src='../img/Playdate/gifmock.gif' title='carousel-1' />
            </MDBRow> */}



            <div className="des-process-description">
                <h2>Defining The Problem</h2>
                <p>COVID-19 and Social Development: Child development experts emphasize the importance of social learning for elementary age children. Being able to interact with other kids of the same age fosters "executive functioning" skills such as impulse control, holding several simultaneous thoughts, and the mental flexibility to problem solve. These skills develop with exposure to peers and having to engage in social interaction. Missing out on social interaction throughout the unexpected closures of schools and other activities have severely limited social development among kids. Learning on a Zoom call cannot nearly encompass the opportunities for social learning that a playground, cafeteria, or classroom can. Even after schools opened up, kids have not been able to interact with each other as much as they have done before.</p>
            </div>



            <div className="des-process-description">
                <h2>Describing the Challenge</h2>
                <p>As a team, we knew we wanted to create a mobile application to provide a solution to this issue. However, the apparent problem was that online schooling is an unsuitable platform for social learning. How would we be able to transform an interface that inherently facilitates less face-to-face interaction into an experience that allows kids to practice conversational skills, problem-solving, and coexisting with others?</p>
            </div>


            <div className="des-process-description">
                <h2>Addressing User Needs</h2>
                <p>During the brainstorming process, we identified our target user audience to be elementary school aged kids. However, social development changes drastically from one age bracket to the next making it important to tailor our app to a certain age. We decided to model our prototype around a user completing either 2nd or 3rd grade.

                    Some key skills 2nd and 3rd graders should be able to learn at this stage in their executive functioning development include: </p>
                <br></br>
                <ol>

                    <li> How to read cues and/or facial expressions of peers</li>

                    <li> How to ask to join in play </li>

                    <li>How to respond to peers, especially when told no, or when teased </li>

                    <li>How to ask for what they want/need in healthy and productive ways</li>
                </ol>
            </div>

            <div className="des-process-description">
                <h2>Developing a Solution</h2>
                <p>Given a short timeframe, we decided to condense our journey map and low fidelity prototype into a FigJam ideation board. A few key components we were considering including splitting the types of interactions into a “Practice on Your Own” feature and a “Connect with the Class” feature where teachers and students could have a forum to facilitate discussion.</p>
                <div id="empathize-img">
                    <img src="../img/Playdate/ideation-playdate.png" />
                </div>
            </div>

            <MDBRow className='playdate-og-sub'>
                <MDBCol md='5' id="playdate-oldsol-img">
                    <img src='../img/playdate/old-sub.png' />
                </MDBCol>

                <MDBCol id="playdate-og-cover-right" md='7'>
                    <h2>Original Hackathon Submission</h2>
                    <p> The screens shown to the left were part of the original submission for the hackathon. During the redesign I identified some key unappealing parts of the visual design: For elementary age children, who are the target user, the color palette needed to be vibrant and convey a sense of enthusiasm and creativity. As a result, the new color palette has a variety of hues and tints of coral, teal, yellow, green and purple that embody the app's message and brand.
                    <br></br>
                    Additionally, the purpose and idea of some of the games/features were not impactful from a UX perspective in the original project as a few shared key similarities, so I consolidated similar games into one to ensure that users had a meaningful learning experience by completing the games.
                    <br></br>
                    The original project also had a navigational issue where there were too many clicks to get to the key features, so that was simplified as well.
                 </p>
                </MDBCol>
            </MDBRow>


            <MDBContainer className='activity-types-playdate'>
                <MDBRow>
                    <h1>Types of Activities</h1>
                    <MDBCol md="4">
                        <h2>Conversations with Class</h2>
                        <img src="../img/Playdate/discussion.png" />
                        <p className='act-types-playdate-desc'>Allows the child to interact with peers with a teacher or supervisor to mediate the discussion. They are able to create fun and interesting prompts for the class to talk about and record and submit their responses.</p>
                    </MDBCol>
                    <MDBCol md="4">
                        <h2>Conversation Starters</h2>
                        <img src="../img/Playdate/conversation-starters.png" />
                        <p className='act-types-playdate-desc'>Gives ideas for different scenarios to facilitate casual conversation with other peers. This feature also allows the user to practice and record and save their responses.</p>
                    </MDBCol>
                    <MDBCol md="4">
                        <h2>Navigate Through a Story</h2>
                        <img src="../img/Playdate/nav-story.png" />
                        <p className='act-types-playdate-desc'>Presents the user with a social scenario in which they have to identify emotion cues, show ability to empathize and respond to a social situation appropriately.</p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>


            <div id="final-sol-playdate">
                <h1 id="final-sol-playdate-heading">Final Components</h1>
                <p>PlayDate has two main components that allow students to engage with the learning content and interact with their peers; “Practice on Your Own” and “Connect with your Class”. The “Practice on Your Own” allows students to practice cues, responses, and facial expressions and engage in voice incorporated tasks/games individually, earning points as they go. The Connect with your Class allows teachers to monitor student’ live interactions via discussion posts.</p>
                {/* <div className="d-flex align-items-center playdate-button-prototype-div">
                    <MDBBtn color="primary" className="mx-auto" href="https://www.figma.com/proto/Ml8naDrZoGdohDDoa2nAtc/WINFO-Hack?node-id=0%3A1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=9%3A2">
                        View Prototype
                    </MDBBtn>
                </div> */}
                <br/>
            </div>
        </div >
    )
}