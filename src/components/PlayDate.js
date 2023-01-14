import React from 'react';
import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';

export function PlayDate(props) {
    return (
        <div>
            <MDBRow className='proj-description'>
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
                                    <h3>Group Members</h3>
                                    <li>Vega Jethani</li>
                                    <li>Esha Bantwal</li>
                                    <li>Sean Guevarra</li>
                                </MDBCol>
                            </MDBRow>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </div>

            <h1 id="des-process">Design Process</h1>

            <MDBCol md="12">
                <div className='playdate-summary'>
                    <h2>Defining the Problem</h2>
                    <p>Defining The Problem: COVID-19 and Social Development
                        Child development experts emphasize the importance of social learning for elementary age children. Being able to interact with other kids of the same age fosters "executive functioning" skills such as impulse control, holding several simultaneous thoughts, and the mental flexibility to problem solve. These skills develop with exposure to peers and having to engage in social interaction.



                        Missing out on social interaction throughout the unexpected closures of schools and other activities have severely limited social development among kids. Learning on a Zoom call cannot nearly encompass the opportunities for social learning that a playground, cafeteria, or classroom can. Even after schools opened up, kids have not been able to interact with each other as much as they have done before.</p>
                </div>
            </MDBCol>

        </div>
    )
}