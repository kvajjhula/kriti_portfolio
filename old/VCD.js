import React from 'react';
import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';


export function VCD(props) {
    return (
        <div className='vcd-description'>
            <MDBRow className="vcd-intro">
                <MDBCol className="vcd-intro-img" md="6">
                    <img src="../img/vcd/finalcover1.png" />
                </MDBCol>
                <MDBCol md="6">
                    <div className="vcd-intro-text">
                        <h1>New York Times Magazine Redesign</h1>
                        <h2>Design 166: Visual Communication Cover Design Project</h2>
                        <p>
                            The Visual Communication Cover Design Project was a New York Times Magazine cover redesign that I did in order to practice the design thinking process. One of my final cover designs is shown to the left.
                        </p>
                    </div>
                </MDBCol>
            </MDBRow>
            <MDBRow className='vcd-design-description'>
                <MDBCol md="4">
                    <h2>Context</h2>
                    <p>
                        In my Design 166 class during the spring quarter of 2022, I was asked to redesign the cover of the New York Times Magazine Tech and Design Issue. The aim of this project was to learn the principles of Visual Communication Design and practice the design thinking process.</p>
                </MDBCol>
                <MDBCol md="4">
                    <h2>Introduction to Design Brief</h2>
                    <p>
                        I was asked to create 2 distinct cover redesigns that best exemplified the themes and content of the issue in a compelling and unique way. The title of the issue is: So the Internet Didn't Turn Out the Way We Hoped. I was to rely largely on my own photography with little illustrations and vector images and was to utilize Adobe Photoshop and Illustrator to retouch images, add graphic elements, typography, etc</p>
                </MDBCol>
                <MDBCol md="4">
                    <h2>Design Requirements</h2>
                    <p>
                        The design was required to have dynamic asymmetrical composition, be visually and conceptually unique, display significant formal contrasts, and contain an image and type that is appropriate to the tone and voice of the magazine's content.</p>
                </MDBCol>
            </MDBRow>

            <MDBRow className='vcd-design-description-themes'>
                <MDBCol md='4' id="vcd-og-cover-img">
                    <img src='../img/vcd/og-cover.png' />
                    <p>Original Cover: Tech and Design Issue November 17, 2019</p>
                </MDBCol>

                <MDBCol id="vcd-og-cover-right" md='8'>
                    <h2>Themes and Content</h2>
                    <p>The several articles of this issue (original cover shown to the left) touch upon a few themes regarding what the internet was hoped to be in the early days of its existence versus what it actually is now. Social media companies in their early days were touted to be all-American, with the hopes of accomplishing a social mission and connecting the world to bridge social gaps.
                        <br />
                        <br />
                        Now there is a shift in attitude, erecting a distrustful public view of tech companies and deep suspicion of their causes. The view is that tech companies have become superpowers that compete with one another yet become increasingly independent and rely on each other to continue their growth.
                        <br />
                        <br />
                        The articles covered the internet as a surveillance and data harvesting tool. It also covered the implementation of pay walls over time for a better online experience and the contrasting experiences of a clean internet and a free internet. The culture of online fandoms and how the internet aids in shaping identity crises in individuals were also a main topic of discussion. </p>
                </MDBCol>
            </MDBRow>

            <div id='mindmap-vcd'>
                <h1>Mind Map</h1>
                <img src="../img/vcd/mind-map.png" />
                <p>In the early stages of ideation, I created a mind map to separate themes and ideas and think about ideas for photography and execution.</p>
            </div>

            <MDBContainer className='vcd-designs'>
                <MDBRow className='vcd-row'>
                    <h1>Week 1 Designs</h1>
                    <MDBCol md="4">
                        <img src="../img/vcd/week1-pic1.jpg" />
                    </MDBCol>
                    <MDBCol md="4">
                        <img src="../img/vcd/week1-pic2.jpg" />
                    </MDBCol>
                    <MDBCol md="4">
                        <img src="../img/vcd/week1-pic3.jpg" />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer className='vcd-designs'>
                <MDBRow className='vcd-row'>
                    <h1>Week 2 Designs</h1>
                    <MDBCol md="4">
                        <img src="../img/vcd/week2-pic2.jpg" />
                    </MDBCol>
                    <MDBCol md="4">
                        <img src="../img/vcd/week2-pic1.jpg" />
                    </MDBCol>
                    <MDBCol md="4">
                        <img src="../img/vcd/week2-pic3.jpg" />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>


            <MDBContainer className='vcd-designs'>
                <MDBRow className='vcd-row'>
                    <h1>Final Designs</h1>
                    <MDBCol md="6">
                        <img src="../img/vcd/finalcover2.jpg" />
                    </MDBCol>
                    <MDBCol md="6">
                        <img src="../img/vcd/finalcover1.png" />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>



        </div>
    )
}