import { Image, Badge } from 'react-bootstrap';
import { useWindowWidth } from '../hooks/WindowSize';
import type { Project } from '../App';

interface ProjectsProps {
    projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    // wrap each image
    interface ProjImgProps {
        name: string;
        display: boolean;
    }
    const ProjImg: React.FC<ProjImgProps> = props => (
        props.display ?
            <Image
                roundedCircle
                fluid src={`/images/projects/${props.name}`} /> :
            <></>
    );

    // adjust ordering depending on browser width
    const narrowWidth = 900;
    const windowWidth: undefined | number = useWindowWidth();
    const isWindowNarrow = (): boolean => {
        if (windowWidth === undefined) {
            return false;
        }
        return windowWidth <= narrowWidth;
    };

    return (
        <div className="section" id="projects">
            {projects.map((project, index) => (
                <div key={index} className="project">
                    <h3><strong>{project.name}</strong></h3>
                    <h5>{project.timeline}</h5>
                    <div>
                        <ProjImg
                            name={project.imageName}
                            display={index % 2 === 0 || isWindowNarrow()} />
                        <div>
                            <p>{project.description}</p>
                            <div className="badges">
                                {project.stack.map((tool, i) => (
                                    <Badge key={i} bg="info" text="light">
                                        {tool}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                        <ProjImg
                            name={project.imageName}
                            display={index % 2 === 1 && !isWindowNarrow()} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects;