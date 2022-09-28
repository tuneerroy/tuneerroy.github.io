import {
    BsEnvelopeFill,
    BsGithub,
    BsLinkedin,
    BsFileEarmarkPersonFill
} from 'react-icons/bs';
import { Image, Container, Row, Col, Tooltip } from 'react-bootstrap';
import OverlayTrigger, {
    OverlayTriggerRenderProps
} from 'react-bootstrap/OverlayTrigger';


const Home = () => {
    interface PhraseLinkProps {
        href: string,
        children: React.ReactNode
    }
    const PhraseLink: React.FC<PhraseLinkProps> = props => {
        return (
            <a
                className="phrase-link"
                rel="noreferrer"
                target="_blank"
                href={props.href}>
                {props.children}
            </a>
        )
    }

    interface TooltipWrapperProps {
        tip: string,
        children: React.ReactNode
    }
    const TooltipWrapper: React.FC<TooltipWrapperProps> = (props) => {
        const children = props.children as unknown as
            ((props: OverlayTriggerRenderProps) => React.ReactNode);

        return (
            <OverlayTrigger
                placement="bottom"
                delay={{ show: 100, hide: 200 }}
                overlay={<Tooltip>{props.tip}</Tooltip>}>
                {children}
            </OverlayTrigger>
        )
    }

    return (
        <div className="section" id="home">
            <Container>
                <Row>
                    <Col>
                        <Image roundedCircle src="/images/profile.png" />
                    </Col>
                    <Col>
                        <div className="vertical-align">
                            <h1>Hi, I'm Tuneer!</h1>
                            <div className="links">
                                <TooltipWrapper tip="Email">
                                    <a
                                        href="mailto:tuneer.roy12@gmail.com">
                                        <BsEnvelopeFill />
                                    </a>
                                </TooltipWrapper>
                                <TooltipWrapper tip="GitHub">
                                    <a
                                        rel="noreferrer"
                                        target="_blank"
                                        href="https://github.com/tuneerroy">
                                        <BsGithub />
                                    </a>
                                </TooltipWrapper>
                                <TooltipWrapper tip="LinkedIn">
                                    <a
                                        rel="noreferrer"
                                        target="_blank"
                                        href="https://www.linkedin.com/in/tuneer-roy-a792a11a4">
                                        <BsLinkedin />
                                    </a>
                                </TooltipWrapper>
                                <TooltipWrapper tip="Resume">
                                    <a
                                        rel="noreferrer"
                                        target="_blank"
                                        href="/Tuneer's%20Resume.pdf">
                                        <BsFileEarmarkPersonFill />
                                    </a>
                                </TooltipWrapper>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <p>
                        Welcome to my portfolio! I'm a sophomore at the University of Pennsylvania studying <PhraseLink href="https://www.cis.upenn.edu/">Computer Science</PhraseLink>.
                    </p>
                    <p>
                        Currently, I work as a backend developer as part of <PhraseLink href="https://pennlabs.org/">Penn Labs</PhraseLink> where I write RESTful API for the <PhraseLink href="https://pennlabs.org/products/penn-mobile">Penn Mobile</PhraseLink> application, Penn's official student app. I am also a Teaching Assistant for the <PhraseLink href="https://catalog.upenn.edu/courses/cis/#:~:text=CIS%202620">Automata, Computability, and Complexity</PhraseLink> course at UPenn. Below, you can find most recent projects.
                    </p>
                </Row>
            </Container>
        </div>
    )
}

export default Home;