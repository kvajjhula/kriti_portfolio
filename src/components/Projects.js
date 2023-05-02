import React from 'react';
import { Link } from 'react-router-dom';
import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';


export function ProjectsPage(props) {
    return (
        <div className='project-page'>
            <div className='project-title'>
                <h1>Projects</h1>
            </div>

            <MDBContainer>
                <MDBRow className='project-cards row-cols-1 row-cols-md-2 g-4 my-5 mx-3'>
                    <MDBCol md='6'>
                        <Link to={"/PlayDate"}>
                            <div className='card-img'>
                                <img className="img-fluid hover-shadow rounded-4"
                                    src="../img/playdate-proj.png"
                                    alt='...'
                                    position='top'
                                />
                                <h2>Playdate | UX Design</h2>
                            </div>
                        </Link>
                    </MDBCol>
                    <MDBCol md=''>
                        <Link to={"/VRMap"}>
                            <div className='card-img'>
                                <img className="img-fluid hover-shadow rounded-4"
                                    src='../img/vr-map.png'
                                    alt='...'
                                    position='top'
                                />
                                <h2>VR Learning Map | Product Design</h2>
                            </div>
                        </Link>
                    </MDBCol>
                </MDBRow>

                <MDBRow className='project-cards row-cols-1 row-cols-md-2 g-4 my-5 mx-3'>
                    <MDBCol md='6'>
                        {/* <Link to={"/PlantParenthood"}> */}
                        <a href = 'https://plant-parenthood-b1597.web.app/'>
                            <div className='card-img'>
                                <img className="img-fluid hover-shadow rounded-4"
                                    src="../img/pp.png"
                                    alt='...'
                                    position='top'
                                />
                                <h2>Plant Parenthood | Front-End Development (HTML/CSS/JS + React)</h2>
                            </div>
                        </a>
                        {/* </Link> */}
                    </MDBCol>
                    <MDBCol md="6">
                        <Link to={"/VCD"}>
                            <div className='card-img'>
                                <img className="img-fluid hover-shadow rounded-4"
                                    src="../img/des166graphic.png"
                                    alt='...'
                                    position='top'
                                />
                                <h2>New York Times Magazine Redesign | Visual Design</h2>
                            </div>
                        </Link>
                    </MDBCol>
                </MDBRow>
                {/* <MDBRow className='project-cards row-cols-1 row-cols-md-2 g-4 my-5 mx-3'>
                    <MDBCol md='6' >
                        <Link to={"/Guppy"}>
                            <div className='card-img'>
                            <img className="img-fluid hover-shadow rounded-4"
                                src="../img/guppy-project.png"
                                alt='...'
                                position='top'
                            />
                            <h2>Guppy | UX Design</h2>
                            </div>
                        </Link>
                    </MDBCol>
                </MDBRow> */}
                
            </MDBContainer>
        </div>

    )
}


