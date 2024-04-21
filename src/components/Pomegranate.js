import React from 'react';
import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';



export function Pomegranate(props) {
    return (
        <div>
            <MDBContainer style={{ paddingTop: '5rem', width: '75%' }}>
                <MDBRow className='align-items-center text-center'>
                    <MDBCol md='12' className='text-center'>
                        <h1 style={{ width: '70%', margin: '0 auto' }}>Enhancing the pregnancy journey through community, mental health, and resources
                        </h1>
                        <p className='subheading' style={{ marginTop: '2rem', marginBottom: '3rem' }}> Design for America ✴ Product Designer ✴ Winter 2022 - Summer 2023 ✴ Figma + FigJam</p>

                        <img
                            src='../img/Pomegranate/pomegranate.png'
                            alt='Project'
                            style={{ width: '100%', height: 'auto', borderRadius: '1rem', marginBottom: '1rem' }}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md='12' >
                        <div style={{ marginTop: '5rem', marginBottom: '2.5rem' }}>
                            <h1 className='h1-sub'>Context</h1>
                            <h2>Design for America is a national organization that empowers students to tackle social challenges through human-centered design practices. </h2>
                            <p>
                                This year-long team project was conducted within the University of Washington chapter of DFA. I served as a product designer, focusing heavily on both UX Research and Design. Driven by a commitment to leverage technology for social good, our team aimed to create a centralized support system designed to meet the specific needs of low-income pregnant individuals. This effort was particularly rewarding for me as it provided an opportunity to enhance my design skills while making a tangible positive impact on the lives of those in underserved communities.
                            </p>
                        </div>

                        <div style={{ marginTop: '5rem', marginBottom: '2.5rem' }}>
                            <h1 className='h1-sub'>Problem</h1>
                            <h2>Low-income pregnant individuals face significant barriers to accessing necessary treatment, information, and resources during their pregnancy journey.</h2>
                            <p>
                                These barriers often result in unequal maternal healthcare outcomes and highlight the need for more inclusive and accessible support systems.
                            </p>
                        </div>

                        <div style={{ marginTop: '5rem', marginBottom: '2.5rem' }}>
                            <h1 className='h1-sub'>Solution</h1>
                            <h2> Enter Pomegranate, a mobile app that aims to centralize perinatal support systems for low-income mothers.
                            </h2>
                            <p>
                                The app provides an individualized experience, guiding users through each stage of pregnancy. Key features include a tailored resource hub, a reflection page for personal growth, a community hub for connecting with other moms, and a product comparison and donation registry.
                            </p>
                            <img
                                src='../img/Pomegranate/Final+pomegranate.png'
                                alt='Project'
                                style={{ width: '100%', height: 'auto', borderRadius: '1rem', marginBottom: '1rem' }}
                            />
                        </div>

                        <div style={{ marginTop: '5rem', marginBottom: '2.5rem' }}>
                            <h1 className='text-center' style={{ margin: '3rem' }}>Our Research and Design Process</h1>
                            <h1 className='h1-sub'>White Paper Research</h1>

                            <h2>Low-income pregnant individuals face significant barriers while trying to navigate pregnancy.</h2>
                            <p>
                                In conducting our secondary research, we explored the design challenges and obstacles that underscore the struggles encountered by low-income pregnant individuals. We found that <strong>insufficient information</strong>, <strong>lack of family support</strong>, and <strong>scarce resources</strong> greatly impede the pregnancy experience for these individuals. The literature consistently points out that the unavailability of readily accessible and reliable information, together with sparse familial support and limited financial means, leads to feelings of isolation and increased stress during pregnancy for this population.
                            </p>
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <iframe title='secres' style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} height="850" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPLsix1gom4mN6W3bTKX1eD%2FSecondary-Research%3Ftype%3Dwhiteboard%26node-id%3D0%253A1%26t%3DwXCTXQZ1jCgzOcvr-1" allowfullscreen></iframe>
                </MDBRow>
                <MDBRow>
                    <MDBCol md='12' >

                        <div style={{ marginTop: '5rem', marginBottom: '2.5rem' }}>
                            <h1 className='h1-sub'>Competitive Analysis and Market Research</h1>
                            <h2>The competition did not effectively balance information and features, leading to overwhelming user experiences and a lack of personalized content.</h2>
                            <p>
                                Our analysis of pregnancy apps like What to Expect, Glow, Ovia, The Bump, and Peanut revealed key insights. These apps often overwhelmed users with excessive features and information, lacked clear onboarding, and struggled to provide personalized content. Pomegranate aims to stand out by focusing on user-friendly design, relevant information, and a consistent visual aesthetic, addressing the shortcomings observed in these existing platforms.
                            </p>

                            <img
                                src='../img/Pomegranate/market analysis.png'
                                alt='Project'
                                style={{ width: '100%', height: 'auto', borderRadius: '1rem', marginBottom: '1rem' }}
                            />
                        </div>

                        <div style={{ marginTop: '5rem', marginBottom: '2.5rem' }}>
                            <h1 className='h1-sub'>User Surveys + Interviews</h1>
                            <h2>Unveiling the Realities of Pregnancy Challenges</h2>
                            <p>
                                Our research commenced with an online survey that garnered an overwhelming response of over 75 participants, distributed through online forums and word of mouth, specifically targeting expectant and recent mothers. Building on the insights gained, we then conducted in-depth interviews with 8 individuals who were either currently pregnant or had recently given birth within the past year.
                            </p>
                            <span><strong>Key Findings</strong></span>
                            <ul>
                                <li><strong>Resource Challenges:</strong> Our survey revealed a universal challenge among the participants: every respondent reported difficulties in accessing reliable resources during their initial pregnancy experiences.</li>

                                <li><strong>Emotional Support Gap:</strong> The personal interviews further exposed a significant gap in emotional support, with more than half of the mothers indicating they felt unsupported during their pregnancies.</li>

                                <li><strong>Mental Distress Impact:</strong> Disturbingly, two of the interviewees reported experiencing severe mental distress due to the lack of a support system, highlighting a critical need for more accessible and empathetic resources.</li>
                            </ul>
                            <img
                                src='../img/Pomegranate/survey.png'
                                alt='Project'
                                style={{ width: '100%', height: 'auto', borderRadius: '1rem', marginBottom: '1rem' }}
                            />
                        </div>
                        <div style={{ marginTop: '5rem', marginBottom: '2.5rem' }}>
                            <h1 className='h1-sub'>User Personas</h1>
                            <h2> We developed two user personas to further identify the needs of our target audience.
                            </h2>
                            <p>
                                Our user surveys and interviews helped us gain valuable insights into the experiences and requirements of low-income expectant and recent mothers, guiding us toward the realization that a <strong>personalized, accessible, and empathetic support system</strong> is needed.
                            </p>

                        </div>

                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <iframe title='synth' style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} width="800" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FBXQExumybvaXUzrb1cZeDX%2FResearch-Synthesis%3Ftype%3Dwhiteboard%26node-id%3D741%253A1944%26t%3DwXCTXQZ1jCgzOcvr-1" allowfullscreen></iframe>
                </MDBRow>
                <MDBRow>
                    <MDBCol md='12'>
                        <div style={{ marginTop: '5rem', marginBottom: '2.5rem' }}>
                            <h1 className='h1-sub'>Design and Ideation</h1>
                            <h2> Choosing the best platform and the most important features for our product through generating an affinity diagram and information architecture.
                            </h2>
                            <p>
                                In the design and ideation phase, our goal was to create the most accessible app possible for our target users. We established clear design requirements that prioritized user-friendliness, inclusivity, and simplicity. Through collaborative brainstorming sessions, we generated a range of innovative ideas, considering features like a community forum, resource hub, and personalized reflections to ensure that our product would effectively bridge the gaps in perinatal support for low-income mothers.
                            </p>
                            <h2 className='text-center' style={{ padding: '2rem' }}>Key Themes Affinity Diagramming</h2>
                            <img
                                src='../img/Pomegranate/affinity.png'
                                alt='Project'
                                style={{ width: '100%', height: 'auto', borderRadius: '1rem', marginBottom: '1rem' }}
                            />
                        </div>
                    </MDBCol>
                </MDBRow>
                <h2 className='text-center' style={{ padding: '2rem' }}>Information Architecture</h2>
                <MDBRow>
                    <iframe title='infoarch' style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} width="800" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F2NgX2pgRqtifGeqcKAe3HH%2FKriti-Vajjhula-Portfolio-Deck%3Ftype%3Ddesign%26node-id%3D576-713%26t%3DWo0AbwYlRzgoJXGP-1%26scaling%3Dscale-down%26page-id%3D576%253A536%26mode%3Ddesign" allowfullscreen></iframe>
                </MDBRow>
                <MDBRow>
                    <MDBCol md='12'>
                        <h2 className='text-center' style={{ padding: '2rem' }}>Low-Fidelity Wireframe Screens</h2>
                        <img
                            src='../img/Pomegranate/lowfi.png'
                            alt='Project'
                            style={{ width: '100%', height: 'auto', borderRadius: '1rem', marginBottom: '1rem' }}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <h1 className='h1-sub' style={{ marginTop: '5rem' }}>Final Prototype</h1>
                    <h2 style={{ marginBottom: '5rem' }}>Presenting the final version of Pomegranate! Try it out below <span class="emoji">✰</span></h2>
                </MDBRow>
                <MDBRow className="align-items-center">
                    <MDBCol md='7'>
                        <h2>See all of your feed at a glance, read through stories from other individuals, and check-in with yourself to ground your emotions.</h2>
                    </MDBCol>
                    <MDBCol md='5'>
                        <img
                            src='../img/Pomegranate/1.png'
                            alt='Project'
                            style={{ width: '100%', height: 'auto', borderRadius: '1rem' }}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="align-items-center">
                    <MDBCol md='5'>
                        <img
                            src='../img/Pomegranate/2.png'
                            alt='Project'
                            style={{ width: '100%', height: 'auto', borderRadius: '1rem' }}
                        />
                    </MDBCol>
                    <MDBCol md='7'>
                        <h2>View the products page for price comparisons and the community registry for donating and searching for needed items.</h2>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="align-items-center">
                    <MDBCol md='7'>
                        <h2>Connect with like-minded moms and gain valuable advice regarding symptoms and self-care.</h2>
                    </MDBCol>
                    <MDBCol md='5'>
                        <img
                            src='../img/Pomegranate/3.png'
                            alt='Project'
                            style={{ width: '100%', height: 'auto', borderRadius: '1rem' }}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="align-items-center">
                    <MDBCol md='5'>
                        <img
                            src='../img/Pomegranate/4.png'
                            alt='Project'
                            style={{ width: '100%', height: 'auto', borderRadius: '1rem' }}
                        />
                    </MDBCol>
                    <MDBCol md='7'>
                        <h2>Access personalized content regarding pregnancy, finances, mental and physical health, and more for a well-informed pregnancy journey.</h2>
                    </MDBCol>
                </MDBRow>
                <MDBRow style={{ marginTop: '5rem'}}>
                    <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} width="800" height="800" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FAYqXDWCIPZGTm9THtY9FV1%2FWireframing-woohoo%3Ftype%3Ddesign%26node-id%3D1048-20570%26t%3DQ7K1ACgGa1uS8fWQ-1%26scaling%3Dscale-down%26page-id%3D1048%253A20505%26starting-point-node-id%3D1048%253A20528%26show-proto-sidebar%3D1%26mode%3Ddesign" allowfullscreen></iframe>
                </MDBRow>


            </MDBContainer>
        </div >
    )
}

