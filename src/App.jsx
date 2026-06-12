import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import FormularioTarefa from './components/FormularioTarefa'
import Filtros from './components/Filtros'
import TarefaItem from './components/TarefaItem'
import Calendario from './components/Calendario'
import HistoricoTarefas from './components/HistoricoTarefas'
import GlobalStyle from './styles/GlobalStyle'
import { darkTheme, lightTheme } from './styles/themes'
import { useTaskManager } from './hooks/useTaskManager'
import { formatarDataCompleta } from './utils/tarefaUtils'
import {
  AppShell,
  ContentGrid,
  ControlPanel,
  EmptyState,
  ListaTarefas,
  Page,
  ProgressFill,
  ProgressHeader,
  ProgressPanel,
  ProgressTrack,
  SidebarBlock,
  SidebarTitle,
  SectionEyebrow,
  SectionTitle,
  StatLabel,
  StatValue,
  TaskHeader,
  TaskPanel,
  TaskTableHead,
  TaskTotal,
  Workbench,
  ResumoItem,
  ResumoLinha,
} from './styles/components/Tarefa.styles'

function App() {
  const {
    state,
    adicionarTarefa,
    alternarTarefa,
    editarTarefa,
    removerTarefa,
    alterarFiltro,
    selecionarData,
    mudarMes,
    alternarTema,
  } = useTaskManager()

  const {
    tarefas,
    historico,
    filtroAtual,
    dataSelecionada,
    mesVisivel,
    temaAtual,
  } = state

  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (tarefa.data !== dataSelecionada) {
      return false
    }

    if (filtroAtual === 'ativas') {
      return !tarefa.concluida
    }

    if (filtroAtual === 'concluidas') {
      return tarefa.concluida
    }

    return true
  })

  const totalTarefas = tarefas.length
  const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.concluida).length
  const tarefasAtivas = totalTarefas - tarefasConcluidas
  const progresso =
    totalTarefas > 0 ? Math.round((tarefasConcluidas / totalTarefas) * 100) : 0
  const tema = temaAtual === 'claro' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={tema}>
      <GlobalStyle />
      <Page>
        <AppShell>
          <Header temaAtual={temaAtual} alternarTema={alternarTema} />

          <Workbench>
            <ControlPanel>
              <SidebarBlock>
                <SectionEyebrow>Entrada</SectionEyebrow>
                <SidebarTitle>Nova tarefa</SidebarTitle>

                <FormularioTarefa
                  adicionarTarefa={adicionarTarefa}
                  dataSelecionada={dataSelecionada}
                />
              </SidebarBlock>

              <SidebarBlock>
                <SectionEyebrow>Calendario</SectionEyebrow>
                <Calendario
                  mesVisivel={mesVisivel}
                  dataSelecionada={dataSelecionada}
                  tarefas={tarefas}
                  mudarMes={mudarMes}
                  selecionarData={selecionarData}
                />
              </SidebarBlock>

              <SidebarBlock>
                <SectionEyebrow>Status</SectionEyebrow>
                <Filtros
                  filtroAtual={filtroAtual}
                  alterarFiltro={alterarFiltro}
                />
              </SidebarBlock>

              <ProgressPanel aria-label="Progresso das tarefas">
                <ProgressHeader>
                  <span>Conclusao</span>
                  <strong>{progresso}%</strong>
                </ProgressHeader>
                <ProgressTrack>
                  <ProgressFill $percentual={progresso} />
                </ProgressTrack>

                <ResumoLinha>
                  <ResumoItem>
                    <StatValue>{totalTarefas}</StatValue>
                    <StatLabel>Total</StatLabel>
                  </ResumoItem>
                  <ResumoItem>
                    <StatValue>{tarefasAtivas}</StatValue>
                    <StatLabel>Ativas</StatLabel>
                  </ResumoItem>
                  <ResumoItem>
                    <StatValue>{tarefasConcluidas}</StatValue>
                    <StatLabel>Concluidas</StatLabel>
                  </ResumoItem>
                </ResumoLinha>
              </ProgressPanel>
            </ControlPanel>

            <TaskPanel>
              <TaskHeader>
                <div>
                  <SectionEyebrow>Documento</SectionEyebrow>
                  <SectionTitle>{formatarDataCompleta(dataSelecionada)}</SectionTitle>
                </div>
                <TaskTotal>
                  {tarefasFiltradas.length}{' '}
                  {tarefasFiltradas.length === 1 ? 'item' : 'itens'}
                </TaskTotal>
              </TaskHeader>

              <ContentGrid>
                <section>
                  {tarefasFiltradas.length > 0 ? (
                    <>
                      <TaskTableHead aria-hidden="true">
                        <span>Horario</span>
                        <span>Tarefa</span>
                        <span>Acao</span>
                      </TaskTableHead>

                      <ListaTarefas>
                        {tarefasFiltradas.map((tarefa) => (
                          <TarefaItem
                            key={tarefa.id}
                            tarefa={tarefa}
                            alternarTarefa={alternarTarefa}
                            editarTarefa={editarTarefa}
                            removerTarefa={removerTarefa}
                          />
                        ))}
                      </ListaTarefas>
                    </>
                  ) : (
                    <EmptyState>
                      Nenhuma tarefa nesta data. Use o formulario para registrar
                      uma tarefa com explicacao.
                    </EmptyState>
                  )}
                </section>

                <HistoricoTarefas historico={historico} />
              </ContentGrid>
            </TaskPanel>
          </Workbench>
        </AppShell>
      </Page>
    </ThemeProvider>
  )
}

export default App
