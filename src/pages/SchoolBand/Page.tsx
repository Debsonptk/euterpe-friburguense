import { memo, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { HiOutlineMailOpen } from 'react-icons/hi'

import escola from 'assets/bandaescolatitle.png'
import francisco from 'assets/francisco.png'
import gilberto from 'assets/gilberto.png'
import gustavo from 'assets/gustavo.png'
import lucas from 'assets/lucas.png'
import marcos from 'assets/marcos.png'
import nelson from 'assets/nelson.png'
import professores from 'assets/professores.png'
import ruana from 'assets/ruana.png'
import sede from 'assets/sede.png'

import FooterComponent from 'components/FooterComponent'
import Menu from 'components/Menu'
import TeacherCard from 'components/TeacherCard'

import useTitle from 'hooks/useTitle'

const SchoolBand: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Banda Escola | Euterpe Friburguense')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Menu />
      <Container>
        <div className="pt-4 pb-5 d-flex justify-content-center">
          <img src={escola} alt="Banda Escola" className="img-fluid" />
        </div>
        <Row className="d-flex row-cols-1 row-cols-md-2 pb-5">
          <Col>
            <p className="pb-5 fs-4">
              A Banda Escola, que recebe o nome de seu fundador Samuel Antônio
              dos Santos, além da sua função de educar e formar pessoas, é a
              grande responsável pela renovação do quadro de músicos da banda.
              Ela atende a mais de 70 jovens que recebem a formação musical de
              professores/componentes da banda principal, e funciona de forma
              inteiramente gratuita.
            </p>
            <h2 className="pb-4">Para maiores informações:</h2>
            <div>
              <div className="d-flex">
                <FaMapMarkerAlt size={22} />
                <p className="px-2">
                  Av Euterpe Friburguense, 53 Centro - Nova Friburgo-RJ
                </p>
              </div>
              <div className="d-flex">
                <HiOutlineMailOpen size={22} />
                <p className="px-2">realbandaeuterpe@hotmail.com</p>
              </div>
              <div className="d-flex">
                <FaPhone size={22} />
                <p className="px-2">(22) 2521-1085</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-center">
              <img src={sede} alt="Logo" className="img-fluid" />
            </div>
          </Col>
        </Row>
        <section>
          <div className="d-flex justify-content-center pt-4 pb-4">
            <img src={professores} alt="Professores" className="img-fluid" />
          </div>
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 d-flex justify-content-center g-5 pb-4">
            <Col className="d-flex">
              <TeacherCard
                cover={nelson}
                name="Nelson José"
                instrument="Trompa"
                description="Formado pela Universidade Federal do Rio de Janeiro, com especialização em Trompa, o Maestro Nelson José da Silva Neto iniciou os seus estudos musicais com o professor Rubens Coelho na Banda Escola da Euterpe Friburguense. O Maestro vem, ao logo de mais de 15 anos a frente da instituição, promovendo uma grande integração entre os músicos da Banda Euterpe com músicos profissionais de todo o Brasil. Isso vem a cada dia tornando as apresentações da Instituição mais profissionais e estimulando os seus músicos a seguirem na carreira Musical."
              />
            </Col>
            <Col className="d-flex">
              <TeacherCard
                cover={gilberto}
                name="Gilberto Pinheiro"
                instrument="Teoria Musical"
                description="Prof. Gilberto Pinheiro: músico mais antigo da Banda, com 56 anos de Instituição, iniciou seus estudos na escola de música da Banda Euterpe com o professor Júpiter Nicolau aos 7 anos de idade. Integrou a Banda de Música da Aeronáutica ( Escola do Campo dos Afonsos) e atua em grupos de cerimônia de Nova Friburgo. Professor de teoria e iniciação musical, tem o papel fundamental de introduzir os alunos no mundo musical e incentivá-los a integrar a Banda Euterpe Friburguense."
              />
            </Col>
            <Col className="d-flex">
              <TeacherCard
                cover={francisco}
                name="Francisco Duarte"
                instrument="Trompete"
                description="Prof. Francisco Duarte da Cruz Filho: Fruto da Escola de Música da Banda Euterpe, vem se destacando no cenário musical friburguense, atuando como trompetista em grupos de câmara e como primeiro trompetista da Banda Principal da Euterpe. É um professor empenhado na formação de novos euterpistas e no crescimento da Instituição."
              />
            </Col>
            <Col className="d-flex">
              <TeacherCard
                cover={lucas}
                name="Lucas Coutinho"
                instrument="Trombone & Percussão"
              />
            </Col>
            <Col className="d-flex">
              <TeacherCard
                cover={marcos}
                name="Marcos Antônio"
                instrument="Clarineta"
                description="Prof. Marcos Antônio da Conceição: Iniciou seus estudos de música na Escola de Música da Banda Euterpe Friburguense no ano de 1978 com o professor Júpiter José Nicolau, mas conhecido como maestro Juju. Mais tarde passou a estudar na mesma escola com o professor José Veloso.

                No ano de 2000 foi aprovado no concurso público para a Banda da Guarda Municipal do Rio de Janeiro, onde permanece até hoje.
                Em 2002 concluiu o curso técnico em música na Escola Espaço da Música em Niterói.
                Em 2004 concluiu o curso técnico em clarineta na Escola de Música Villa-Lobos com os professores Paulo Passos e José Botelho.
                É formado em Licenciatura em Música pela Escola de Música da Universidade Federal do Rio de Janeiro (UFRJ), concluindo seu curso em dezembro de 2011.
                É professor de clarineta e saxofone da Escola de Música Samuel Antônio dos Santos (Banda Euterpe) desde o ano de 2001 e primeiro clarinetista da Banda Euterpe Friburguense."
              />
            </Col>
            <Col className="d-flex">
              <TeacherCard
                cover={gustavo}
                name="Gustavo Dutra"
                instrument="Flauta"
              />
            </Col>
            <Col className="d-flex">
              <TeacherCard
                cover={ruana}
                name="Ruana Moraes"
                instrument="Casa Madre Roselli"
              />
            </Col>
          </Row>
        </section>
      </Container>
      <FooterComponent />
    </>
  )
}

export default memo(SchoolBand)
