import { Image, Badge } from 'react-bootstrap';
import { useWindowWidth } from '../hooks/WindowSize';
import Info from '../json/info.json';

const Projects = () => {
    interface ProjImgProps {
        name: string
    }
    const ProjImg: React.FC<ProjImgProps> = props => (
        <Image roundedCircle fluid src={`/images/projects/${props.name}`} />
    );

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
            {Info.projects.map((project, index) => (
                <div key={index} className="project">
                    <h3><strong>{project.name}</strong></h3>
                    <h5>{project.timeline}</h5>
                    <div>
                        {
                            index % 2 === 0 || isWindowNarrow() ? <ProjImg name={project.imageName} /> : null
                        }
                        <div>
                            <p>{project.description}</p>
                            <div className="badges">
                                {project.stack.map((tool, i) => (
                                    <Badge key={i} bg="info" text="light">{tool}</Badge>
                                ))}
                            </div>
                        </div>
                        {
                            index % 2 === 1 && !isWindowNarrow() ? <ProjImg name={project.imageName} /> : null
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects;