import { useEffect, useState } from "react";
import { useParams } from "react-router";

interface Project {
    id: number;
    name: string;
    cover: string;
}

const ProjectDetails = () => {
    const { id } = useParams();
    const [ project, setProject ] = useState<Project>();
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                const project = data.find(e => e.id === Number(id));
                setProject(project);

            })
    }, [ id ]);

    return (
        <div data-aos="zoom-out">
            <h1 className="text-4xl md:text-5xl font-bold leading-normal">{project?.name}</h1>
        </div>
    );
};

export default ProjectDetails;