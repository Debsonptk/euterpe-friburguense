import { memo, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import sede from 'assets/sede.png'
import sejaSocio from 'assets/sejaSocio.png'

import FooterComponent from 'components/FooterComponent'
import Menu from 'components/Menu'

import useTitle from 'hooks/useTitle'

const BecomeAMember: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Seja Sócio | Euterpe Friburguense')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Menu />
      <Container>
        <div className="d-flex justify-content-center pt-4 pb-5">
          <img src={sejaSocio} alt="Seja Sócio" className="img-fluid" />
        </div>
        <section>
          <Row className="row-cols-1 row-cols-md-2">
            <Col className="pb-5">
              <h2 className="pb-4">Precisamos da sua ajuda!</h2>
              <p>
                A Sociedade Musical Beneficente Euterpe Friburguense vive da
                ajuda de um convênio feito com a Prefeitura Municipal de Nova
                Friburgo, sendo convertido em pagamento de contas internas, tais
                como: salário de professores e funcionários. Entretanto, tal
                auxílio não é suficiente para a manutenção completa de sua Sede
                (reformada em Julho de 2019 através da contribuição dos sócios),
                de sua Banda de Música e de sua Escola de Música. Para tanto,
                precisamos da contribuição mensal de nossos sócios mantenedores,
                que são de suma importância para o crescimento da Euterpe
                Friburguense.
              </p>
              <p>
                Além do mais, o auxílio dos sócios é revestido em manutenção e
                compra de instrumentos, pagamento de contas de água e luz,
                consertos e manutenções em geral, materiais de limpeza,
                suplementos para a secretaria, etc.
              </p>
              <p>
                <mark>
                  Seja sócio e faça parte da grande família Euterpe. Venha nos
                  visitar em nossa sede localizada na avenida Euterpe
                  Friburguense, nº 53, aberta das 14h às 18h, ou entre em
                  contato pelo telefone (22) 2521-1085.
                </mark>
              </p>
            </Col>
            <Col>
              <img src={sede} alt="Sede" className="img-fluid" />
              <span className="d-flex justify-content-end">
                <strong>Fachada reformada em Julho de 2019</strong>
              </span>
            </Col>
          </Row>
        </section>
      </Container>
      <FooterComponent />
    </>
  )
}

export default memo(BecomeAMember)
