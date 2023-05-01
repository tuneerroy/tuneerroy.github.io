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
            Welcome to my portfolio! I'm a student at the University of Pennsylvania studying <PhraseLink href="https://www.cis.upenn.edu/">Computer Science</PhraseLink>.
          </p>
          <p>
            Currently, I work as a Team Lead as part of <PhraseLink href="https://pennlabs.org/">Penn Labs</PhraseLink> where I write RESTful API for the <PhraseLink href="https://pennlabs.org/products/penn-mobile">Penn Mobile</PhraseLink> application, Penn's official student app. I also work part time for a cool company called <PhraseLink href="https://learn.withmartian.com/">Martian</PhraseLink>, a startup using NLP to design powerful EdTech tools! Below, you can find details on most recent projects.
          </p>
        </Row>
      </Container>
    </div>
  )
}

export default Home