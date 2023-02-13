import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';


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
                        <p>The Foundry10 VR Learning Map is an interactive map web plugin that visualizes educational VR immersive experiences in the Seattle metro area as a resource for local educators to introduce VR to students
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
        </div>
    )
}