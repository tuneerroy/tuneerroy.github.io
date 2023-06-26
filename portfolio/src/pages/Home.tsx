import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'
import PersonalLinks from '../components/PersonalLinks'

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

    return (
        <div className="section" id="home">
            <Container>
                <Row>
                    <Col>
                        <div className="vertical-align">
                            <LazyLoadImage
                                className='rounded-circle'
                                effect={'blur'}
                                src={'/images/profile.png'} />
                        </div>
                    </Col>
                    <Col>
                        <PersonalLinks />
                    </Col>
                </Row>
                <Row>
                    <p>
                        Welcome to my portfolio! I'm a rising junior studying <PhraseLink href="https://www.cis.upenn.edu/">Computer Science</PhraseLink> at the University of Pennsylvania. Below, you can find details on my most recent projects.
                    </p>
                </Row>
            </Container>
        </div>
    )
}

export default Home