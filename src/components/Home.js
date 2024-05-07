import { MDBFooter, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';
import { ProjectsPage } from './Projects';

export function HomePage(props) {
    return (
        <main>
            <MDBContainer style={{ paddingTop: '5rem', paddingBottom: '5rem', width: '85%' }}>
                <MDBRow className='align-items-center' style={{marginBottom: '5rem'}}>
                    <div>
                        <div>
                            <div>
                            <h1>Hi there! I'm Kriti Vajjhula <span class="emoji">✰</span></h1>
                            </div>
                            <div>
                                <h2 className='h2-main'>I'm a 4th year student at the University of Washington Seattle studying informatics with a focus in Human Computer Interaction and Software Development. I am passionate about tackling design projects that are rooted at the intersection of education and sustainability.</h2>
                            </div>

                        </div>
                    </div >
                </MDBRow>
                <MDBRow>
                    <ProjectsPage />
                </MDBRow>
            </MDBContainer>
            <MDBFooter>
                <div className='text-center p-3'>
                    <p>Designed and developed with ♥ by Kriti Vajjhula</p>
                </div>
            </MDBFooter>
        </main>
    )
}

