import React from 'react';
import { Link } from 'react-router-dom';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBRow, MDBCol } from 'mdb-react-ui-kit';


export function ProjectsPage(props) {
    return (
        <div className='project-page'>
            <div className="project-title-container">
                <div className="text-center py-lg-5">
                    <h1 className="">Projects</h1>
                </div>
            </div>
            <MDBRow className='project-cards row-cols-1 row-cols-md-2 g-4 gx-9 my-5 mx-5'>
                <MDBCol md='3' >
                    <Link to={"/Guppy"}>
                        <MDBCard className="project-card">
                            <MDBCardImage className="card-img"
                                src="../img/GuppyPortfolio.png"
                                alt='...'
                                position='top'
                            />
                            <div className="mask">
                                <div className="d-flex justify-content-center align-items-center h-100">
                                </div>
                            </div>
                            <MDBCardBody>
                                <MDBCardTitle className="card-title">Guppy</MDBCardTitle>
                            </MDBCardBody>
                        </MDBCard>
                    </Link>
                </MDBCol>
                <MDBCol md='3'>
                    <Link to={"/PlantParenthood"}>
                        <MDBCard className="project-card">
                            <MDBCardImage className="card-img"
                                src="../img/PlantParenthood.png"
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Plant Parenthood</MDBCardTitle>
                            </MDBCardBody>
                        </MDBCard>
                    </Link>
                </MDBCol>
                <MDBCol md='3'>
                    <Link to={"/PlayDate"}>
                        <MDBCard className="project-card">
                            <MDBCardImage className="card-img"
                                src='../img/Playdate.png'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>PlayDate</MDBCardTitle>
                            </MDBCardBody>
                        </MDBCard>
                    </Link>
                </MDBCol>
                <MDBCol md='3'>
                    <Link to={"/VRMap"}>
                        <MDBCard className="project-card">
                            <MDBCardImage className="card-img"
                                src='../img/foundry10.png'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Foundry10 VR Learning Map</MDBCardTitle>
                            </MDBCardBody>
                        </MDBCard>
                    </Link>
                </MDBCol>
            </MDBRow>
        </div>

    )
}


