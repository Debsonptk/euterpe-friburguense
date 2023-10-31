import { memo, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { FaRegCalendarAlt, FaUserFriends } from 'react-icons/fa'
import { GiBookCover, GiFrenchHorn } from 'react-icons/gi'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { MdSchool } from 'react-icons/md'

import euterpetext from 'assets/euterpetext.png'

import IconCard from 'components/IconCard'
import Menu from 'components/Menu'

import useTitle from 'hooks/useTitle'

const Home: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Home | Euterpe Friburguense')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Menu />
      <Container>
        <div className="d-flex justify-content-center">
          <img
            src={euterpetext}
            alt="Euterpe Friburguense"
            className="img-fluid pt-4 pb-4"
          />
        </div>

        <Row className="d-flex row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pb-3">
          <Col>
            <IconCard
              title="História"
              description="Conheça a história da banda"
              icon={GiBookCover}
              link="/historia"
            />
          </Col>
          <Col>
            <IconCard
              title="A Banda"
              description="Conheça a banda e seus músicos"
              icon={GiFrenchHorn}
              link="/musicos"
            />
          </Col>
          <Col>
            <IconCard
              title="Banda Escola"
              description="Conheça o nosso futuro"
              icon={MdSchool}
              link="/musicos"
            />
          </Col>
          <Col>
            <IconCard
              title="Fotos"
              description="Veja algumas fotos atuais e históricas"
              icon={HiOutlinePhotograph}
              link="/fotos"
            />
          </Col>
          <Col>
            <IconCard
              title="Eventos"
              description="Confira a data das nossas próximas apresentações"
              icon={FaRegCalendarAlt}
              link="/eventos"
            />
          </Col>
          <Col>
            <IconCard
              title="Seja Sócio"
              description="Saiba como ser um sócio da Euterpe Friburguense"
              icon={FaUserFriends}
              link="/seja-socio"
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default memo(Home)
