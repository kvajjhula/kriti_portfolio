import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

export function PlayDate(props) {
    return (
        <div className='proj-description'>
            <MDBRow>
                <MDBCol className='playdate-title-img' md='4'>
                    <img className='heading-img' src='../img/Playdate/heading_image.webp'/>
                </MDBCol>
                <MDBCol className='playdate-title' md='8'>
                <h1>Playdate</h1>
                <h2>UW WINFO Hackathon Project</h2>
                Due to the pandemic, elementary school aged children are no longer able to practice social and developmental skills like they previously could in school settings with their friends, peers, and adult figures. Our app, “Playdate”, bridges this gap in social learning by providing essential features to aid elementary aged children in their growth and development.
                </MDBCol>
            </MDBRow>
        </div>
    )
}