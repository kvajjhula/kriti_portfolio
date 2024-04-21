import React from 'react';
import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';


export function PlayDate(props) {
    return (
        <div>
            <MDBContainer style={{ paddingTop: '5rem', width: '75%' }}>
                <MDBRow className='align-items-center text-center'>
                    <MDBCol md='12' className='text-center'>
                        <h1 style={{ width: '70%', margin: '0 auto' }}>Fostering social growth in young learners by bridging pandemic-induced gaps with innovative, supportive tools</h1>
                        <p className='subheading' style={{ marginTop: '2rem', marginBottom: '3rem' }}> UW WINFO Hackathon 2022 ✴ Product Designer ✴ January 2022 ✴ Figma + FigJam</p>

                        <img
                            src='../img/Playdate/playdate-thumbnail1.png'
                            alt='Project'
                            style={{ width: '100%', height: 'auto', borderRadius: '1rem', marginBottom: '1rem' }}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md='12' >
                        <div style={{ marginTop: '5rem', marginBottom: '2.5rem' }}>
                            <h1 className='h1-sub'>Context</h1>
                            <h2>Bridging Educational Gaps through Playdate at the UW WINFO Hackathon</h2>
                            <p>
                                The 2022 WINFO Hackathon, a 2-day virtual collegiate hackathon, provided a platform for students from various disciplines to tackle pressing societal challenges. Due to the pandemic, elementary school aged children were no longer able to practice social and developmental skills like they previously could in school settings with their friends, peers, and adult figures. Our app, “Playdate”, bridges this gap in social learning by providing essential features to aid elementary aged children in their growth and development.
                            </p>
                        </div>

                        <div style={{ marginTop: '5rem', marginBottom: '2.5rem' }}>
                            <h1 className='h1-sub'>Outcome</h1>
                            <h2>Developed an Interactive Prototype to Foster Social Skills in Young Learners</h2>
                            <p>
                                At the end of the 2 days, we created a high fidelity prototype using Figma for a mobile application that modeled a solution that addressed all of our goals. However, all of the screens that are currently displayed are the result of a significant redesign that I took on a year after the hackathon ended, enhancing its usability and aesthetic appeal. The original as well as the new and improved version are both shown in the following case study, highlighting our iterative process and the evolution of our design approach.
                            </p>
                        </div>

                        <div style={{ marginTop: '5rem', marginBottom: '2.5rem' }}>
                            <h1 className='h1-sub'>Defining the Problem</h1>
                            <h2>COVID-19 and Social Development </h2>
                            <p>
                                Child development experts emphasize the importance of social learning for elementary age children. Being able to interact with other kids of the same age fosters "executive functioning" skills such as impulse control, holding several simultaneous thoughts, and the mental flexibility to problem solve. These skills develop with exposure to peers and having to engage in social interaction. Missing out on social interaction throughout the unexpected closures of schools and other activities have severely limited social development among kids. Learning on a Zoom call cannot nearly encompass the opportunities for social learning that a playground, cafeteria, or classroom can. Even after schools opened up, kids have not been able to interact with each other as much as they have done before.
                            </p>
                        </div>

                        <div style={{ marginTop: '5rem', marginBottom: '2.5rem' }}>
                            <h1 className='h1-sub'>Design Process</h1>
                            <h2>Addressing User Needs </h2>
                            <p>During the brainstorming process, we identified our target user audience to be elementary school aged kids. However, social development changes drastically from one age bracket to the next making it important to tailor our app to a certain age. We decided to model our prototype around a user completing either 2nd or 3rd grade.Some key skills 2nd and 3rd graders should be able to learn at this stage in their executive functioning development include: </p>
                            <br></br>
                            <ol>
                                <li> How to read cues and/or facial expressions of peers</li>
                                <li> How to ask to join in play </li>
                                <li>How to respond to peers, especially when told no, or when teased </li>
                                <li>How to ask for what they want/need in healthy and productive ways</li>
                            </ol>

                        </div>

                        <div style={{ marginTop: '5rem', marginBottom: '2.5rem' }}>
                            <h1 className='h1-sub'>Solution</h1>
                            <h2>Introducing PlayDate, a dynamic educational tool to enhance social learning among elementary-aged children.</h2>
                            <p>
                                PlayDate revolutionizes traditional learning methods by integrating interactive features that promote social skills and emotional intelligence. Students can earn points by completing activities, thereby gamifying their participation and engage a healthy competitive spirit among friends. The app incorporates the following features:
                                <hr></hr>
                                <ul>
                                    <li><strong>Practice on Your Own:</strong> students independently practice social cues, responses, and facial expressions through voice-incorporated tasks and games, earning points as they progress.</li>
                                    <ul>
                                        <li><strong>Navigate Through a Story:</strong> presents social scenarios that challenge children to identify emotions and react appropriately.</li>
                                        <li><strong>Conversation Starters:</strong> offers scenarios to initiate and navigate casual conversations</li>
                                        <li><strong>Play Games:</strong> allows students to do puzzles on their own, like word searches</li>

                                    </ul>
                                    <li><strong>Connect with the Class</strong></li>
                                    <ul>
                                        <li><strong>Discuss With Your Class:</strong> allows teachers to oversee and interact with student discussions, enhancing collaborative learning </li>
                                        <li><strong>Games with Friends:</strong>Students can play a variety of games together like puzzles and filling in stories together.</li>
                                    </ul>
                                </ul>
                            </p>
                            <img
                                src='../img/Playdate/features.png'
                                alt='Project'
                                style={{ width: '100%', height: 'auto', borderRadius: '1rem', marginBottom: '1rem' }}
                            />
                        </div>

                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <h1 className='h1-sub'>Final Prototype</h1>
                    <h2>Presenting the final version of PlayDate! Try it out below <span class="emoji">✰</span></h2>
                    <iframe title='final' style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} height="850" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FlCc9WGftRnmC7Z52bB0XOZ%2FWINFO-Hack-(Copy)%3Ftype%3Ddesign%26node-id%3D353-827%26t%3DPEogJrQQ8OYdEfjj-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D353%253A827%26mode%3Ddesign" allowfullscreen></iframe>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

// use this for redesign
// With a redesigned vibrant color palette and streamlined navigation, PlayDate provides a child-friendly interface that is not only visually appealing but also easy to navigate, making learning both fun and impactful.
