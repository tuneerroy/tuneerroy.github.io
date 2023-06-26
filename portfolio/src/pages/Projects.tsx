import { Image, Badge } from 'react-bootstrap'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { useWindowWidth } from '../hooks/WindowSize'
import type { Project } from '../App'

interface ProjectsProps {
    projects: Project[]
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    // wrap each image
    interface ProjImgProps {
        name: string
        display: boolean
    }
    const ProjImg: React.FC<ProjImgProps> = props => (
        props.display ?
            <LazyLoadComponent>
                <Image
                    roundedCircle
                    fluid src={`/images/projects/${props.name}`} />
            </LazyLoadComponent>
            :
            <></>
    )

    // adjust ordering depending on browser width
    const narrowWidth = 900
    const windowWidth: undefined | number = useWindowWidth()
    const isWindowNarrow = (): boolean => {
        return windowWidth !== undefined && windowWidth <= narrowWidth
    }

    return (
        <div className="section" id="projects">
            {projects.map((project, index) => (
                <div key={index} className="project">
                    <h4><strong>{project.name}</strong></h4>
                    <h5>{project.timeline}</h5>
                    <div>
                        <ProjImg
                            name={project.imageName}
                            display={index % 2 === 0 || isWindowNarrow()} />
                        <div>
                            <p>{project.description}</p>
                            <div className="badges">
                                {project.stack.map((tool, i) => (
                                    <Badge key={i} text="light">
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

export default Projects