import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';

export function GuppyProject(props) {
    return (
        <div className='construction'>
            <h1>This page is still under construction!</h1>

            <svg width="400" height="200" viewBox="-200 -100 400 200" fill="none">
                <path
                    stroke="#E0CEB9"
                    strokeWidth="4"
                    d="
                M-200 80 L -80 80 Q 80 80 70 -10
                A 70 70 0 0 0 -70 -10
                Q -80 80 80 80 L 200 80"
                />

                <g className="sleigh">
                    <path
                        d="
                        M -30 -2 L 30 -2 A 10 10 0 0 0 30 -22
                        M -20 -2 L -20 -17
                        M 20 -2 L 20 -17"
                        stroke="#AF6455"
                        strokeWidth="5"
                    />
                    <path d="M -27 -17 L 27 -17" stroke="#7A504F" strokeWidth="6" />
                </g>
            </svg>

            <h3>Meanwhile, here's a link to the project!</h3>
            <MDBBtn color="primary" className="mx-auto" href="https://www.figma.com/proto/Sx90FgoTwxrzlKsydMZkBP/INFO-Final-Prototype-(Copy)?node-id=1%3A2&starting-point-node-id=350%3A479">
                View Prototype
            </MDBBtn>

        </div>
    )
}