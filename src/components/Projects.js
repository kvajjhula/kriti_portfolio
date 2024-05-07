import React from 'react';
import { Link } from 'react-router-dom';
import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';


export function ProjectsPage(props) {
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <h1>Projects</h1>
            </div>

            <MDBContainer>
                <MDBRow className='row-cols-1 row-cols-md-2 g-4 my-5 mx-3'>

                    <MDBCol md='6'>
                        <Link to={"/Pomegranate"}>
                            <div className='card-img'>
                                <img className="img-fluid hover-shadow rounded-4"
                                    src="../img/pom.png"
                                    alt='...'
                                    position='top'
                                    loading='lazy'
                                    style={{ marginBottom: '20px' }}
                                />
                                <h2 className='h2-main'>Pomegranate | Product Design</h2>
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
                                    loading='lazy'
                                    style={{ marginBottom: '20px' }}
                                />
                                <h2 className='h2-main'>VR Learning Map | Product Design</h2>
                            </div>
                        </Link>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='row-cols-1 row-cols-md-2 g-4 my-5 mx-3'>

                    <MDBCol md='6'>
                        <Link to={"/PlayDate"}>
                            <div className='card-img'>
                                <img className="img-fluid hover-shadow rounded-4"
                                    src="../img/playdate-proj.png"
                                    alt='...'
                                    position='top'
                                    loading='lazy'
                                    style={{ marginBottom: '20px' }}
                                />
                                <h2 className='h2-main'>Playdate | UX Design</h2>
                            </div>
                        </Link>
                    </MDBCol>
                    <MDBCol md='6'>
                        {/* <Link to={"/PlantParenthood"}> */}
                        <a href='https://plant-parenthood-b1597.web.app/'>
                            <div className='card-img'>
                                <img className="img-fluid hover-shadow rounded-4"
                                    src="../img/pp.png"
                                    alt='...'
                                    position='top'
                                    loading='lazy'
                                    style={{ marginBottom: '20px' }}
                                />
                                <h2 className='h2-main'>Plant Parenthood | Front-End Development (HTML/CSS/JS + React)</h2>
                            </div>
                        </a>
                        {/* </Link> */}
                    </MDBCol>
                </MDBRow>
                {/* <MDBRow className='row-cols-1 row-cols-md-2 g-4 my-5 mx-3'>
                    <MDBCol md='6' >
                        <Link to={"/MenstrualHealth"}>
                            <div className='card-img'>
                                <img className="img-fluid hover-shadow rounded-4"
                                    src="../img/rstudio.png"
                                    alt='...'
                                    position='top'
                                    loading='lazy'
                                    style={{ marginBottom: '20px' }}
                                />
                                <h2>Menstrual Health in India | Data Analysis</h2>
                            </div>
                        </Link>
                    </MDBCol>
                    <MDBCol md='6' >
                        <Link to={"/MindMeet"}>
                            <div className='card-img'>
                                <img className="img-fluid hover-shadow rounded-4"
                                    src="../img/mindmeet.png"
                                    alt='...'
                                    position='top'
                                    loading='lazy'
                                    style={{ marginBottom: '20px' }}
                                />
                                <h2>MindMeet | UX Design</h2>
                            </div>
                        </Link>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='row-cols-1 row-cols-md-2 g-4 my-5 mx-3'>

                    <MDBCol md="6">
                        <Link to={"/VCD"}>
                            <div className='card-img'>
                                <img className="img-fluid hover-shadow rounded-4"
                                    src="../img/des166graphic.png"
                                    alt='...'
                                    position='top'
                                    loading='lazy'
                                    style={{ marginBottom: '20px' }}
                                />
                                <h2>New York Times Magazine Redesign | Visual Design</h2>
                            </div>
                        </Link>
                    </MDBCol>

                </MDBRow> */}
            </MDBContainer>
        </div>

    )
}


