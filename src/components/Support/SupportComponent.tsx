import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import casafriburgo from 'assets/casafriburgo.png'
import prefeitura from 'assets/prefeitura.png'
import stam from 'assets/stam.png'

import { Image2Size, ImageSize } from './styles'

const SupportComponent: React.FC = () => {
  return (
    <div>
      <Container>
        <div className="d-flex justify-content-center align-items-center">
          <h2 className="fs-1">
            <strong>Apoio:</strong>
          </h2>
        </div>
        <Row className="d-flex row-cols-1 row-cols-md-3  align-items-center">
          <Link to="https://www.pmnf.rj.gov.br/site/" target="_blank">
            <Col className="d-flex justify-content-center">
              <Image2Size
                src={prefeitura}
                alt="Prefeitura de Nova Friburgo"
                className="img-fluid"
              />
            </Col>
          </Link>
          <Link to="https://stam.com.br/" target="_blank">
            <Col className="d-flex justify-content-center">
              <ImageSize src={stam} alt="stam" className="img-fluid" />
            </Col>
          </Link>
          <Link to="https://www.casafriburgo.com.br/" target="_blank">
            <Col className="d-flex justify-content-center">
              <ImageSize
                src={casafriburgo}
                alt="Casa Friburgo"
                className="img-fluid"
              />
            </Col>
          </Link>
        </Row>
      </Container>
    </div>
  )
}

export default memo(SupportComponent)
