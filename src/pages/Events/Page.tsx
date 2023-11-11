import { memo, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import eventos from 'assets/eventos.png'

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
        <div className="d-flex justify-content-center pt-4 pb-5">
          <img src={eventos} alt="Próximos Eventos" className="img-fluid" />
        </div>
        <section>
          <Row>
            <Col className="d-flex">
              <h5>Ensaios:</h5>
              <p className="d-flex align-items-end px-1">
                Segundas e Quartas 19h30
              </p>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  )
}

export default memo(Home)
