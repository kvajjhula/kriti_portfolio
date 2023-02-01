import { MDBFooter } from 'mdb-react-ui-kit';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export function HomePage(props) {
    return (
        <main>
            <div className="home-body">
                <div className="home-container gap-2">
                    <div className="heading">
                        <h1>Kriti Vajjhula</h1>
                    </div>
                    <div className="subheading">
                        <h2>Undergraduate Student</h2>
                    </div>
                    <div className="paragraph">
                        <p>I’m a third year student at the University of Washington Seattle studying informatics with a focus in Human Computer Interaction and Software Development. I am passionate about tackling design projects that are rooted at the intersection of education and sustainability.</p>
                    </div>
                    <Link to="/Projects">
                        <Button variant="primary">See My Work!</Button>
                    </Link>
                </div>
            </div >

            <MDBFooter>
                <div className='text-center p-3'>
                    <p>Designed and developed with ♥ by Kriti Vajjhula</p>
                </div>
            </MDBFooter>
        </main>
    )
}

