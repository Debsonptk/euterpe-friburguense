import { memo, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import {
  GiClarinet,
  GiFlute,
  GiFrenchHorn,
  GiSaxophone,
  GiTrombone,
  GiTrumpet,
  GiTuba,
} from 'react-icons/gi'
import { LiaDrumSolid } from 'react-icons/lia'

import abanda from 'assets/abanda.png'
import maestro from 'assets/maestro.png'

import FooterComponent from 'components/FooterComponent'
import Menu from 'components/Menu'
import MusicianCard from 'components/MusicianCard'

import useTitle from 'hooks/useTitle'

import { ContentBand, ImageSize, TextColor } from './styles'

const TheBand: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('A Banda | Euterpe Friburguense')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Menu />
      <ContentBand>
        <Container>
          <div className="d-flex justify-content-center pt-4 pb-4">
            <img src={abanda} alt="A Banda" className="img-fluid" />
          </div>
          <p className="fs-5">
            Conhecida como a{' '}
            <strong>&ldquo;Centenária das Centenárias&rdquo;</strong>, a Banda
            Euterpe Friburguense mantém em seu quadro de músicos, na maioria,
            ex-alunos da sua Banda Escola. A Euterpe é composta por músicos
            amadores, que conciliam suas atividades do dia-a-dia aos ensaios da
            Banda. No seu corpo musical temos: médicos, advogados, bancários,
            professores, estudantes, empresários etc. Pessoas com as mais
            diversas profissões, que carregam em si o amor pela música e pela
            nossa querida Euterpe Friburguense.
          </p>
          <section>
            <TextColor className="text-center pb-2 pt-4 pb-3">
              O Maestro
            </TextColor>
            <Row className="row-cols-1 row-cols-md-2 pb-3">
              <Col>
                <p>
                  Sua paixão pela Música e pela Euterpe Friburguense já dura
                  mais de 30 anos. Formado pela Universidade Federal do Rio de
                  Janeiro, com especialização em Trompa, o{' '}
                  <strong>Maestro Nelson José da Silva Neto</strong> iniciou os
                  seus estudos musicais com o professor Rubens Coelho na Banda
                  Escola da Euterpe Friburguense. O Maestro vem, ao logo de mais
                  de 15 anos a frente da instituição, promovendo uma grande
                  integração entre os músicos da Banda Euterpe com músicos
                  profissionais de todo o Brasil. Isso vem a cada dia tornando
                  as apresentações da Instituição mais profissionais e
                  estimulando os seus músicos a seguirem na carreira Musical.
                  Hoje, as sementes da Banda Euterpe fazem parte de bandas
                  militares e orquestras espalhadas por todo o Brasil. Para o
                  nosso Maestro, a Euterpe não é apenas uma Banda de Música, é
                  uma Família.
                </p>
              </Col>
              <Col className="text-center">
                <div className="d-flex justify-content-center">
                  <ImageSize
                    src={maestro}
                    alt="Maestro José da Silva Neto"
                    className="img-fluid"
                  />
                </div>
                <strong>Maestro Nelson José da Silva Neto</strong>
              </Col>
            </Row>
          </section>
          <section>
            <TextColor className="text-center pb-2 pt-4 pb-3">
              Músicos da Banda Principal
            </TextColor>
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 pb-4 d-flex justify-content-center">
              <Col>
                <MusicianCard
                  title="Flautas:"
                  icon={GiFlute}
                  musician1="Andreza Rodrigues Duarte"
                  musician2="Paulo Roberto Machado de Araújo"
                  musician3="Gustavo Dutra"
                />
              </Col>
              <Col>
                <MusicianCard
                  title="Clarinetas:"
                  icon={GiClarinet}
                  musician1="Denilson G. da Fonseca Rafael"
                  musician2="Iara Gomes da Conceição"
                  musician3="Igor Luciano da Conceição"
                  musician4="João Vitor Eriques Combat"
                  musician5="Luanna Luciano da Conceição"
                  musician6="Marcos Antônio da Conceição"
                  musician7="Vitorino Iezze Medeiros"
                  musician8="Peterson da Silva"
                />
              </Col>
              <Col>
                <MusicianCard
                  title="Trompas:"
                  icon={GiFrenchHorn}
                  musician1="Debson dos Santos Coelho"
                  musician2="Gabriele de Amaro Alves"
                  musician3="Gustavo Faria Lucas"
                  musician4="Jhonata Ouverney Serpa"
                  musician5="Joeny de Paula Jordão"
                  musician6="Tiago da  Silva Pereira"
                  musician7="Wagner Rosa Teixeira"
                />
              </Col>
              <Col>
                <MusicianCard
                  title="Trompetes:"
                  icon={GiTrumpet}
                  musician1="Francisco Duarte da C. Filho"
                  musician2="Gilberto Pinheiro"
                  musician3="Pedro Roberto G. de Mattos"
                  musician4="João Paulo Francisco Alonso"
                  musician5="Kelvin Gomes Torres"
                  musician6="Keterson M. Correa Caldas"
                />
              </Col>
              <Col>
                <MusicianCard
                  title="Trombones:"
                  icon={GiTrombone}
                  musician1="Gabriel Batista Azevedo"
                  musician2="Gabriel da Ressurreição Archânjo"
                  musician3="Lucas Silva Coutinho"
                  musician4="Tiago Vidal Corrêa"
                  musician5="Ulysses dos Santos Souza"
                />
              </Col>
              <Col>
                <MusicianCard
                  title="Tubas:"
                  icon={GiTuba}
                  musician1="Arthur Lima Damaceno"
                  musician2="Guilherme do Couto Tardin"
                />
              </Col>
              <Col>
                <MusicianCard
                  title="Sax Alto:"
                  icon={GiSaxophone}
                  musician1="Ruana Freiman de Moraes"
                  musician2="Guilherme Sarno G. Coelho"
                />
              </Col>
              <Col>
                <MusicianCard
                  title="Sax Tenor:"
                  icon={GiSaxophone}
                  musician1="Ênio Pinheiro"
                />
              </Col>
              <Col>
                <MusicianCard
                  title="Sax Barítono:"
                  icon={GiSaxophone}
                  musician1="Roberto Costa"
                />
              </Col>
              <Col>
                <MusicianCard
                  title="Bombardinos:"
                  icon={GiTuba}
                  musician1="Lucas Matos B. dos Santos"
                  musician2="Márcio Fontes Cunha"
                />
              </Col>
              <Col>
                <MusicianCard
                  title="Percussão:"
                  icon={LiaDrumSolid}
                  musician1="Piter de Oliveira Toledo"
                  musician2="Wellington de Souza P. Muniz"
                />
              </Col>
            </Row>
          </section>
        </Container>
        <FooterComponent />
      </ContentBand>
    </>
  )
}

export default memo(TheBand)
