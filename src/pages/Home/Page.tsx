import { memo, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { FaRegCalendarAlt, FaUserFriends } from 'react-icons/fa'
import { GiBookCover, GiFrenchHorn } from 'react-icons/gi'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { MdSchool } from 'react-icons/md'

import banner1 from 'assets/banner1.png'
import banner2 from 'assets/banner2.png'
import euterpetext from 'assets/euterpetext.png'

import Carousel from 'components/Carousel'
import FooterComponent from 'components/FooterComponent'
import IconCard from 'components/IconCard'
import Menu from 'components/Menu'
import Support from 'components/Support'

import useTitle from 'hooks/useTitle'

import { ContainerCard, ContentHome } from './styles'

const carouselItems = [
  {
    image: banner1,
    subTitle: 'Teatro João Caetano',
  },
  {
    image: banner2,
    subTitle: 'Ensaio',
  },
]

const Home: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Home | Euterpe Friburguense')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Menu />
      <ContentHome>
        <Carousel items={carouselItems} />
        <Container>
          <div className="d-flex justify-content-center">
            <img
              src={euterpetext}
              alt="Euterpe Friburguense"
              className="img-fluid pt-4 pb-4"
            />
          </div>

          <Row className="d-flex row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
            <Col>
              <ContainerCard>
                <IconCard
                  title="História"
                  description="Conheça a história da banda"
                  icon={GiBookCover}
                  link="/historia"
                />
              </ContainerCard>
            </Col>
            <Col>
              <ContainerCard>
                <IconCard
                  title="A Banda"
                  description="Conheça a banda e seus músicos"
                  icon={GiFrenchHorn}
                  link="/a-banda"
                />
              </ContainerCard>
            </Col>
            <Col>
              <ContainerCard>
                <IconCard
                  title="Banda Escola"
                  description="Conheça o nosso futuro"
                  icon={MdSchool}
                  link="/banda-escola"
                />
              </ContainerCard>
            </Col>
            <Col>
              <ContainerCard>
                <IconCard
                  title="Fotos"
                  description="Veja algumas fotos atuais e históricas"
                  icon={HiOutlinePhotograph}
                  link="/fotos"
                />
              </ContainerCard>
            </Col>
            <Col>
              <ContainerCard>
                <IconCard
                  title="Eventos"
                  description="Confira a data das nossas próximas apresentações"
                  icon={FaRegCalendarAlt}
                  link="/eventos"
                />
              </ContainerCard>
            </Col>
            <Col>
              <ContainerCard>
                <IconCard
                  title="Seja Sócio"
                  description="Saiba como ser um sócio da Euterpe Friburguense"
                  icon={FaUserFriends}
                  link="/seja-socio"
                />
              </ContainerCard>
            </Col>
          </Row>
        </Container>
        <Support />
        <FooterComponent />
      </ContentHome>
    </>
  )
}

export default memo(Home)
