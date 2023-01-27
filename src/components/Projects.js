import React from 'react';
import { Link } from 'react-router-dom';
import { MDBCard, MDBRipple, MDBCardImage, MDBCardBody, MDBCardTitle, MDBRow, MDBCol } from 'mdb-react-ui-kit';


export function ProjectsPage(props) {
    return (
        <div className='project-page'>
            {/* <div className="project-title-container">
                <div className="text-center py-lg-5">
                    <h1 className="">Projects</h1>
                </div>
            </div> */}

            <div className='project-title'>
                <h1>Projects</h1>
            </div>
            <MDBRow className='project-cards row-cols-1 row-cols-md-2 g-4 my-5 mx-3'>
                <MDBCol md='6'>
                    <Link to={"/PlayDate"}>
                        <MDBCard className="project-card">
                            <MDBCardImage className="card-img"
                                src="../img/playdate-proj.png"
                                alt='...'
                                position='top'
                            />
                        </MDBCard>
                        <h2>Playdate | UX Design</h2>
                    </Link>
                </MDBCol>
                <MDBCol md=''>
                    <Link to={"/VRMap"}>
                        <MDBCard className="project-card">
                            <MDBCardImage className="card-img"
                                src='../img/vr-map.png'
                                alt='...'
                                position='top'
                            />
                        </MDBCard>
                        <h2>VR Learning Map | Product Design</h2>
                    </Link>
                </MDBCol>
            </MDBRow>

            <MDBRow className='project-cards row-cols-1 row-cols-md-2 g-4 my-5 mx-3'>
                <MDBCol md='6'>
                    <Link to={"/PlantParenthood"}>
                        <MDBCard className="project-card">
                            <MDBCardImage className="card-img"
                                src="../img/pp.png"
                                alt='...'
                                position='top'
                            />
                        </MDBCard>
                        <h2>Plant Parenthood | Front-End Development (HTMl/CSS/JS React)</h2>
                    </Link>
                </MDBCol>
                <MDBCol md='6' >
                    <Link to={"/Guppy"}>
                        <MDBCard className="project-card">
                            <MDBCardImage className="card-img"
                                src="../img/guppy-project.png"
                                alt='...'
                                position='top'
                            />
                        </MDBCard>
                        <h2>Guppy | UX Design</h2>
                    </Link>
                </MDBCol>
            </MDBRow>
        </div>

    )
}


