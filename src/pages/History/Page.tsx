import { memo, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import capela from 'assets/capela.png'
import desfile2 from 'assets/desfile2.png'
import desfile from 'assets/desfileantigo.png'
import fundador from 'assets/fundador.png'
import title from 'assets/historia.png'
import instituacao from 'assets/instituicao.png'
import navio from 'assets/navio.png'
import patrimonio from 'assets/patrimonio.png'
import publico from 'assets/publico.png'
import samuel from 'assets/samuel.png'

import FooterComponent from 'components/FooterComponent'
import Menu from 'components/Menu'

import useTitle from 'hooks/useTitle'

import { SizeImage } from './styles'

const History: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('História | Euterpe Friburguense')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Menu />
      <Container>
        <div className="d-flex justify-content-center pt-4 pb-4">
          <img src={title} alt="A história da Banda" className="img-fluid" />
        </div>
        <section>
          <Row className="d-flex row-cols-1 row-cols-lg-2">
            <Col>
              <p>
                Em 1858, um navio da marinha portuguesa deixou Lisboa com
                destino a Buenos Aires. Já em alto mar a tripulação foi
                surpreendida por uma fortíssima tempestade, colocando em risco
                todos a bordo. Samuel Antonio dos Santos; oficial músico e
                regente da Banda de Fuzileiros Navais, católico fervoroso,
                devoto de Santo Antônio rogou então a Deus pela vida de todos;
                em troca prometia, na primeira cidade em que aportasse, pediria
                baixa da marinha e fundaria uma banda de música e uma igreja em
                louvor a Santo Antônio. Ao chegarem ao Rio de Janeiro salvos,
                Samuel pede desligamento ao comandante do navio. Na capital do
                Império trabalha como professor e regente até abril de 1862.
              </p>
              <p>
                Na ocasião, por intermédio de amigos, é apresentado ao coronel
                Galeano das Neves, presidente da Câmara da Vila de Nova
                Friburgo. Sabendo que o Colégio Freeze precisava de um professor
                de música, imediatamente apresenta Samuel ao diretor do
                educandário que o contrata e traz o maestro para Nova Friburgo.
              </p>
              <p>
                Em 26 de fevereiro de 1863, Samuel Antônio dos Santos, com
                pessoas influentes da cidade, funda a Sociedade Musical
                Beneficente Euterpe Friburguense (homenagem à deusa-musa grega,
                patrona da música e das artes), tendo o barão de Nova Friburgo
                como o seu primeiro presidente. Por 22 anos, ou seja, até 1885,
                além de professor foi também regente desta primeira manifestação
                artística e cultural da cidade. A segunda promessa aconteceria
                em 13 de junho de 1884, com a inauguração da capela de Santo
                Antônio, no Suspiro, com recursos obtidos pela diretoria da
                Euterpe.
              </p>
              <p>
                Entre os ilustres admiradores da Banda consta o maestro e
                compositor Heitor Villa-Lobos, que em 1915, visitando Nova
                Friburgo, assistiu apresentação da Euterpe, aplaudindo com
                entusiasmo a exibição da banda.
              </p>
              <p>
                A Euterpe Friburguense sempre esteve presente nos acontecimentos
                marcantes de Nova Friburgo. No dia 24 de novembro de 1932, com a
                Banda do Corpo de Fuzileiros, recepcionou a chegada à estação
                Leopoldina (atual PMNF) do presidente Getulio Vargas e comitiva.
              </p>
              <p>
                Na segunda visita, em 30 de maio de 1943, Getulio Vargas
                regressa da inauguração da Exposição de Cordeiro, e na chegada é
                recepcionado pelo Tiro de Guerra, comandado na época pelo
                sargento Renato Lopes. Getulio visitou o Colégio Anchieta,
                Sanatório Naval e fábricas; ao sair da prefeitura, na Praça XV
                de novembro (atual G. Vargas), a banda executou o hino Salve
                Getulio Vargas.
              </p>
              <p>
                Outro momento histórico foi o comício de encerramento da
                campanha vitoriosa de Juscelino Kubitscheck a presidência da
                república em 1955. A Euterpe foi convidada para abrilhantar o
                evento. Eleito, Juscelino tornou-se presidente de honra da
                Euterpe, sócio contribuinte e honorário até falecer em agosto de
                1976.
              </p>
              <p>
                Em seus 149 anos de glórias, alguns nomes marcaram época na
                Euterpe: Samuel Antonio dos Santos (fundador), Humberto Picciali
                da Escola de Música de Milão. No comando, Picciali de 1916/33
                ousou no repertório da banda introduzindo óperas e sinfonias
                trazidas da Itália. João Batista Madureira da Silva, professor
                de música, arranjador, compositor; compôs em 1945 um dobrado
                homenageando a fundação da ONU. Viraria tema de abertura do
                “Repórter Esso”. Outros baluartes Carlos Rotary, Luiz Gonzaga
                Caputo de Faria, Professor Rubens Coelho Gomes. Atualmente, a
                Banda Euterpe é comandada pelo jovem maestro Nelson José da
                Silva Neto.
              </p>
              <p>
                Na sede, o casarão do século XX arquiva-se relíquias como fotos
                antigas a 1ª de 1871, com o maestro Rangel; partituras de mais
                de 130 anos, a partitura original do 1º milheiro impresso do
                Hino Nacional Brasileiro. Mesmo com poucos recursos oriundos de
                sócios e simpatizantes foram realizadas reformas internas
                visando melhor acomodação dos alunos, pesquisadores e de
                visitantes
              </p>
              <p>
                Em 1992, a Banda participou do XVII Encontro Estadual de Bandas
                de Músicas Civis, no Teatro Municipal do Rio de Janeiro,
                convidada pelo Coordenador da entidade Estadual Eduardo
                Wermelinger, chamando-a de “Centenária das Centenárias”.
              </p>
              <p>
                Em 2002 participou do XXIV Concurso de Bandas Civis da
                Secretaria de Cultura (RJ), na Sala Cecília Meireles,
                conquistando 1º lugar da classe especial em disputa com as
                melhores bandas do estado; das maratonas de bandas promovidas
                pela Secretaria de Cultura (RJ), realizadas na Sala Cecília
                Meireles em 2005, 2007, 2008 e 2009, com isso recebeu inúmeros
                convites para exibir-se em várias cidades fluminenses. Em
                fevereiro de 2010, convidada para entrega do prêmio aos melhores
                da cultura do estado do Rio de Janeiro, no Teatro João Caetano.
              </p>
              <p>
                Nas administrações alternadas de José Nilson e Francisco de
                Assis da Silva (Assis), que é o seu atual presidente, a Euterpe
                passou e passa por uma grande fase. Em reconhecimento foi
                agraciada, em 2007, pela Alerj com a Medalha Tiradentes, em
                comemoração a 145 anos de fundação; além do título de Patrimônio
                Cultural do Rio de Janeiro nº. 001. Além de já ser reconhecida
                por ser de Utilidade Pública Municipal e Estadual.
              </p>
            </Col>
            <Col className="pb-5">
              <div className="pb-4">
                <SizeImage
                  src={navio}
                  alt="gravura da viagem"
                  className="img-fluid"
                />
              </div>
              <div className="pb-4">
                <img src={desfile} alt="desfile" className="img-fluid" />
              </div>
              <div className="pb-4">
                <img src={desfile2} alt="desfile" className="img-fluid" />
              </div>
              <div className="pb-4">
                <img src={publico} alt="desfile" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </section>
        <section>
          <div className="d-flex justify-content-center pb-4">
            <img src={fundador} alt="O Fundador" className="img-fluid" />
          </div>
          <Row className="d-flex row-cols-1 row-cols-lg-2">
            <Col>
              <p>
                Samuel Antônio dos Santos nasceu na freguesia das Mercês, em
                Lisboa, Portugal, em 8 de Dezembro de 1831. Era filho de Antônio
                Francisco dos Santos e Mafalda Rosa. Tornou-se oficial da
                marinha lusitana e regente da banda de fuzileiros. Em 1858
                zarpava de Lisboa em um navio da frota portuguesa, a Fragata
                Vasco da Gama, com destino a Buenos Aires. Em meio à travessia
                do atlântico uma grande tormenta quase levou a frágil embarcação
                ao fundo do oceano. Apesar de sua coragem e da coragem de seus
                comandados, Samuel, homem religioso que era, entregou sua preces
                a Deus, prometendo caso saíssem vivos daquela tempestade, dar
                baixa em sua patente e ingressando na vida civil dedicar-se à
                música, sua principal paixão e construir uma igreja a Santo
                Antônio, seu padroeiro. Depois de alguns meses, ainda naquele
                ano, são e salvos, o navio jogou âncora no porto do Rio de
                Janeiro. De imediato Samuel pediu baixa da marinha portuguesa.
                Cumprida a primeira obrigação, Samuel trabalhou naquela cidade
                até meados de 1862. Em abril deste ano viajou para Nova Friburgo
                a fim de lecionar música. Apresentado por amigos a Galiano das
                Neves, diretor do Colégio Freese, foi imediatamente contratado.
                Devido às péssimas condições de acomodação no Colégio, Samuel
                foi residir na casa de Elisa Eckert Pascal, viúva de Fernando
                Pascal, onde conheceu a filha de Elisa, Guilhermina Josefina,
                por quem enamorou-se. Nesta oportunidade surge a figura do
                comerciante Francisco José Bohrer, que muito amigo da família
                Eckert, sede parte dos fundos de sua residência para a
                construção de uma pequena sala de apresentações. Então com a
                ajuda de tantos outros amigos de famílias friburguenses (Bravo,
                Sardou, Berçot, Tingly, Martignoni, e outras) surge finalmente a
                idéia de uma banda. Em 26 de Fevereiro de 1863 estava fundada a
                Sociedade Musical Beneficente Euterpe Friburguense, a qual
                Samuel regeu por muitos anos. (O nome Euterpe é uma homenagem à
                deusa grega da arte e da música). Era hora de partir para a
                última promessa. Nos anos seguintes, trabalhou muito e com a
                ajuda de Francisco José Bohrer, foi ascendendo socialmente.
                Precisou também desmanchar um noivado em Portugal, o que fez
                através de cartas. Finalmente, a 8 de Agosto de 1867, Samuel e
                Guilhermina casaram-se. Sabedora da promessa do marido, logo
                após o casamento Guilhermina lhe disse: - “Agora o compromisso é
                meu também. Vamos trabalhar para a realizá-lo”. Prendada em
                artes cênicas, Guilhermina pôs-se ao trabalho com o objetivo de
                angariar fundos para a construção da igreja, transformando sua
                casa em um pequeno teatro, onde eram feitas as encenações. Em 26
                de outubro de 1875 a câmara de Nova Friburgo procede a doação de
                um pequeno terreno à Euterpe Friburguense. Em 13 de Junho de
                1879 o então vigário João Felipe Pinheiro dá sua benção durante
                o lançamento da pedra fundamental da capela de Santo Antônio. A
                construção da capela foi lenta, pois os recursos eram
                conseguidos com festivais e leilões que a Euterpe realizava.
                Exatos cinco anos depois, em 13 de Junho de 1884, sendo Vigário
                da Paróquia o Padre Amaro Theot Castor Brasil, é inaugurada a
                capela. A última promessa estava finalmente concretizada. Samuel
                cuidou com muito zelo da Capela e organizou as festas do seu
                padroeiro. Estabeleceu a distribuição do Pão de Santo Antônio.
                Não deixou filhos, mas sempre teve para com os amigos e os
                necessitados um carinho especial. Foi membro da Irmandade do
                Santíssimo Sacramento. Possuiu uma firma comercial em sociedade
                com Fernando José Bohrer, filho de Francisco. Ocupou cargos
                eletivos. Foi pessoa estimada e respeitada na sociedade
                Friburguense. Samuel veio a falecer a 8 de Dezembro de 1905, aos
                74 anos e Guilhermina em 10 de Setembro de 1919.
              </p>
            </Col>
            <Col>
              <div className="pb-4 text-center">
                <div className="d-flex justify-content-center">
                  <img
                    src={samuel}
                    alt="Samuel Antonio dos Santos"
                    className="img-fluid"
                  />
                </div>
                <span className="px-3">
                  Samuel Antônio dos Santos (1831-1905)
                </span>
              </div>
              <div className="pb-4 text-center">
                <div className="d-flex justify-content-end">
                  <img
                    src={capela}
                    alt="Capela Sto Antonio"
                    className="img-fluid"
                  />
                </div>
                <span>Capela de Santo Antônio (1884)</span>
              </div>
            </Col>
          </Row>
        </section>
        <section>
          <div className="d-flex justify-content-center pb-3 pt-3">
            <img
              src={patrimonio}
              alt="PATRIMÔNIO CULTURAL DO ESTADO DO RIO DE JANEIRO"
              className="img-fluid"
            />
          </div>
          <p>
            CONSIDERA PATRIMÔNIO CULTURAL DO ESTADO DO RIO DE JANEIRO AS BANDAS
            DE MÚSICAS CIVIS CENTENÁRIAS. * Estado do Rio de Janeiro * Projeto
            de Lei (PL) * PBI * Nomeação de Instituição Pública * Cultura *
            Altineu Cortes * Legisladores * Aprovado Número do projeto: PL723/07
            Data de apresentação: Ago 2007 Data de aprovação: Abr 2008 PROJETO
            DE LEI Nº 723/2007 EMENTA: CONSIDERA PATRIMÔNIO CULTURAL DO ESTADO
            DO RIO DE JANEIRO AS BANDAS DE MÚSICAS CIVIS CENTENÁRIAS. Autor(es):
            Deputado ALTINEU CORTES A ASSEMBLÉIA LEGISLATIVA DO ESTADO DO RIO DE
            JANEIRO RESOLVE: Art. 1º - Fica considerado patrimônio cultural do
            Estado do Rio de Janeiro o conjunto de Bandas de Música Civis
            Centenárias em atividade. Art. 2º - Para fim do disposto na presente
            Lei , considera-se Banda de Música Civil , toda entidade musical
            ,constituída sem fim lucrativo ,que contribui para a formação
            cultural e divulgação da arte em todo território fluminense. Art.
            3º- Caberá à Secretaria de Estado de Cultura efetuar o levantamento
            oficial das entidades musicais civis centenárias que formarão o
            conjunto objeto da presente Lei . Plenário Barbosa Lima Sobrinho, 08
            de agosto de 2007 Deputado ALTINEU CÔRTES Justificativa: O Estado do
            Rio de Janeiro possui uma enorme quantidade de bandas de música
            civis ,verdadeiras escolas profissionalizantes, responsáveis pela
            formação de um grande número de músicos que atuam em bandas
            militares e diversas orquestras do Brasil e do exterior. Entidades
            constituídas sem fins lucrativos , responsáveis pela divulgação da
            arte e da cultura , contribuem a quase um século e meio para a
            formação cultural do povo fluminense. Presentes em quase todos os
            municípios do Estado , as bandas de música fazem a alegria da
            população quando desfilam pelas ruas ou em suas apresentações em
            praças e auditórios. O conjunto de bandas civis centenárias em
            atividade no Estado do Rio de Janeiro é formado atualmente pelas
            seguintes associações: SOCIEDADE MUSICAL BENEFICENTE EUTERPE
            FRIBURGUENSE – Fundada em 26 de fevereiro de 1863 – Nova Friburgo
            SOCIEDADE MUSICAL BENEFICENTE CAMPESINA FRIBURGUENSE – Fundada em 06
            de janeiro de 1870 – Nova Friburgo SOCIEDADE MUSICAL DEOZÍLIO PINTO
            – Fundada em 10 de março de 1870- Pedra de Guaratiba – Rio de
            Janeiro SOCIEDADE MUSICAL LYRA DE APOLO –Fundada em 19 de maio de
            1870 – Campos dos Goytacazes SOCIEDADE MUSICAL NOVA AURORA – Fundada
            em 08 de junho de 1873 – Macaé SOCIEDADE MUSICAL LYRA CONSPIRADORA
            CAMPISTA –Fundada em 02 de agosto de 1882 – Campos dos Goytacazes
            SOCIEDADE MUSICAL BENEFICENTE LIRA DOS CONSPIRADORES – Fundada em 25
            de dezembro de 1882 – Macaé LYRA DE ARION – Fundada em 12 de maio de
            1888 – Santo Antonio de Pádua BANDA DE MÚSICA DO COLÉGIO SALESIANO
            SANTA ROSA – Fundada em 06 de dezembro de 1888 – Niterói BANDA DO
            GINÁSIO MUSICAL E RECREATIVO 24 DE FEVEREIRO –Fundada em 24 de
            fevereiro de 1891 – Santa Cruz – Rio de Janeiro. SOCIEDADE MUSICAL
            OPERÁRIOS CAMPISTAS – Fundada em 26 de maio de 1892 – Campos dos
            Goytacazes BANDA MUSICAL UNIÃO DOS OPERÁRIOS – Fundada em 09 de
            julho de 1892 – São João da Barra SOCIEDADE MUSICAL LIRA GUARANI –
            Fundada em 22 de outubro de 1893 – Campos dos Goytacazes SOCIEDADE
            MUSICAL ISABELENSE – Fundada em 04 de julho de 1895 –Santa Isabel do
            Rio Preto – Valença SOCIEDADE MUSICAL SETE DE SETEMBRO – Fundada em
            07 de setembro de 1898 – Miracema SOCIEDADE Boletim E-Leitor Cidadão
            Mantenha-se informado/a com as notícias mais recentes. Edições
            anteriores.
          </p>
          <p>
            EUTERPE COMERCIAL – Fundada em 19 de maio de 1900 – Barra do Piraí
            SOCIEDADE MUSICAL RECREIO BOMJARDINENSE - Fundada em 22 de outubro
            de 1900 – Bom Jardim SOCIEDADE MUSICAL UNIÃO DOS ARTISTAS – Fundada
            em 10 de janeiro de 1901 – Barra do Piraí CLUBE MUSICAL EUTERPE
            SEBASTIANENSE – Fundada em 01 de maio de 1903 – Campos dos
            Goytacazes SOCIEDADE MUSICAL FRATERNIDADE CORDEIRENSE – Fundada em
            18 de abril de 1905 – Cordeiro. Lei correspondente: 5215/2008
          </p>
        </section>
        <section className="pb-4">
          <div className="d-flex justify-content-center pb-5 pt-5 ">
            <img
              src={instituacao}
              alt="Instituição de Utilidade Pública
"
              className="img-fluid"
            />
          </div>
          <div>
            <span>Número do projeto: PL3342/10 </span>
            <p>Data de apresentação: Nov 2010</p>
            <p>
              A ASSEMBLÉIA LEGISLATIVA DO ESTADO DO RIO DE JANEIRO RESOLVE: Art.
              1º - Fica declarada de Utilidade Pública a “SOCIEDADE MUSICAL
              BENEFICENTE EUTERPE FRIBURGUENSE”, com sede e foro no Município de
              Nova Friburgo. Art. 2º - Esta lei entra em vigor na data de sua
              publicação, revogadas as disposições em contrário. Plenário
              Barbosa Lima Sobrinho, 17 de novembro de 2010. Justificativa: O
              presente Projeto de Lei tem por objetivo considerar de Utilidade
              Pública a SOCIEDADE MUSICAL BENEFICENTE EUTERPE FRIBURGUENSE, com
              sede e foro no Município de Nova Friburgo. A Sociedade,
              constituída em 26 de fevereiro de 1863, tem por objetivo
              desenvolver atividades ligadas à cultura e a arte, dentre outras.
              Tendo em vista o caráter humanitário dos serviços que presta,
              aliado às necessidades com que se defrontam as instituições
              filantrópicas, a concessão do título de utilidade pública estadual
              representará um importante respaldo para que possa continuar sua
              importantíssima missão. Cumpre informar que a presente propositura
              atende aos requisitos da Resolução nº 01/92 da Comissão de
              Constituição e Justiça, conforme documentação em anexo.
            </p>
          </div>
        </section>
      </Container>
      <FooterComponent />
    </>
  )
}

export default memo(History)
