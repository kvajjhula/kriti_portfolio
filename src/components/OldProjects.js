import React from 'react';
import { useState } from 'react';


export function ProjectsPage(props) {

    const projArray = props.projects.map((project) => {
        const card = <ProjectCard key={project.title} projects={project} />
        return card;
    });

    const [isHovering, setIsHovering] = useState(false);

    function handleMouseOver(event) {
        console.log(event.target);
        setIsHovering(true);
    };

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

    const [isHovering, setIsHovering] = useState(false);

    function handleMouseOver(event) {
        setIsHovering(true);
    };

    function handleMouseOut(event) {
        setIsHovering(false);
    };

    return (
        <div className="project-item text-center" >
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="project-item-image">
                <img className="image" src={project.img} width="200" height="300" />
            </div>
            <div className="overlay">
                <div className="overlay-text">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </div>
            </div>
        </div>
    );
}