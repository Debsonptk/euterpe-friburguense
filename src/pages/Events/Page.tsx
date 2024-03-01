import { memo, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import eventos from 'assets/eventos.png'
import aula from 'assets/Events/aulaInalgural.png'
import gorro from 'assets/Events/gorro.png'
import recital from 'assets/Events/recital.png'

import FooterComponent from 'components/FooterComponent'
import Menu from 'components/Menu'

import useTitle from 'hooks/useTitle'

import { ContainerColor, ContentEvents } from './styles'

const Home: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Eventos | Euterpe Friburguense')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Menu />
      <ContentEvents>
        <Container>
          <div className="d-flex justify-content-center pt-4 pb-5">
            <img src={eventos} alt="Próximos Eventos" className="img-fluid" />
          </div>
          <ContainerColor className="border-bottom border-top border-3">
            <Row className="row-cols-1 row-cols-md-2">
              <Col className="d-flex pt-5">
                <p className="fs-1 px-5 text-white">Ensaios:</p>
              </Col>
              <Col>
                <p className="d-flex justify-content-center align-items-end px-1 fs-3 pb-5 pt-5 text-white">
                  Segundas e Quartas 19h30
                </p>
              </Col>
            </Row>
          </ContainerColor>
          <section className="border-bottom  border-2 border-end border-start">
            <Row className="row-cols-1 row-cols-md-2">
              <Col className="d-flex pt-5 d-flex align-items-center">
                <p className="fs-1 px-5">Aula Inaugural:</p>
              </Col>
              <Col className="d-flex justify-content-center">
                <img
                  src={aula}
                  alt="Gorro Encantado"
                  className="img-fluid p-2"
                />
              </Col>
            </Row>
          </section>
          <ContainerColor className="border-bottom  border-3">
            <Row className="row-cols-1 row-cols-md-2">
              <Col className="d-flex pt-5 d-flex align-items-center">
                <p className="fs-1 text-white px-5">Gorro Encantado:</p>
              </Col>
              <Col className="d-flex justify-content-center">
                <img
                  src={gorro}
                  alt="Gorro Encantado"
                  className="img-fluid p-2"
                />
              </Col>
            </Row>
          </ContainerColor>
          <section className="border-bottom  border-2 border-end border-start">
            <Row className="row-cols-1 row-cols-md-2">
              <Col className="d-flex pt-5 d-flex align-items-center">
                <p className="fs-1 px-5">Recital:</p>
              </Col>
              <Col className="d-flex justify-content-center">
                <img
                  src={recital}
                  alt="Gorro Encantado"
                  className="img-fluid p-2"
                />
              </Col>
            </Row>
          </section>
        </Container>
        <FooterComponent />
      </ContentEvents>
    </>
  )
}

export default memo(Home)
