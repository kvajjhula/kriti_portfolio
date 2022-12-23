import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export function ProjectsPage(props) {

    const projArray = props.projects.map((project) => {
        const card = <ProjectCard key={project.title} projects={project} />
        return card;
    });

    return (
        <div>
            <div className="project-title-container">
                <div className="text-center py-lg-5">
                    <h1 className="">Projects</h1>
                </div>
            </div>
            <div>
                <div className="project-container">
                    {projArray}
                </div>
            </div>
        </div>

    )
}

function ProjectCard(props) {
    const project = props.projects;
    return (
        <div>
            <div className="project-item text-center">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
            <div>
                <img>src={project.img}</img>
            </div>
        </div>
    );
}