import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import FormularioTarefa from './components/FormularioTarefa'
import Filtros from './components/Filtros'
import TarefaItem from './components/TarefaItem'
import GlobalStyle from './styles/GlobalStyle'
import { darkTheme, lightTheme } from './styles/themes'
import {
  Container,
  EmptyState,
  ListaTarefas,
  Painel,
  Page,
  Resumo,
  ResumoItem,
} from './styles/components/Tarefa.styles'

function App() {
  const [tarefas, setTarefas] = useState([])
  const [filtroAtual, setFiltroAtual] = useState('todas')
  const [temaAtual, setTemaAtual] = useState('claro')

  const adicionarTarefa = (texto) => {
    const novaTarefa = {
      id: Date.now(),
      texto,
      concluida: false,
    }

    setTarefas((tarefasAtuais) => [novaTarefa, ...tarefasAtuais])
  }

  const alternarTarefa = (id) => {
    setTarefas((tarefasAtuais) =>
      tarefasAtuais.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa,
      ),
    )
  }

  const removerTarefa = (id) => {
    setTarefas((tarefasAtuais) =>
      tarefasAtuais.filter((tarefa) => tarefa.id !== id),
    )
  }

  const alternarTema = () => {
    setTemaAtual((tema) => (tema === 'claro' ? 'escuro' : 'claro'))
  }

  const tarefasFiltradas = tarefas.filter((tarefa) => {
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
  const tema = temaAtual === 'claro' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={tema}>
      <GlobalStyle />
      <Page>
        <Container>
          <Header temaAtual={temaAtual} alternarTema={alternarTema} />

          <Painel>
            <FormularioTarefa adicionarTarefa={adicionarTarefa} />

            <Resumo aria-label="Resumo das tarefas">
              <ResumoItem>
                <strong>{totalTarefas}</strong>
                <span>Total</span>
              </ResumoItem>
              <ResumoItem>
                <strong>{tarefasAtivas}</strong>
                <span>Ativas</span>
              </ResumoItem>
              <ResumoItem>
                <strong>{tarefasConcluidas}</strong>
                <span>Concluidas</span>
              </ResumoItem>
            </Resumo>

            <Filtros
              filtroAtual={filtroAtual}
              alterarFiltro={setFiltroAtual}
            />

            {tarefasFiltradas.length > 0 ? (
              <ListaTarefas>
                {tarefasFiltradas.map((tarefa) => (
                  <TarefaItem
                    key={tarefa.id}
                    tarefa={tarefa}
                    alternarTarefa={alternarTarefa}
                    removerTarefa={removerTarefa}
                  />
                ))}
              </ListaTarefas>
            ) : (
              <EmptyState>Nenhuma tarefa encontrada.</EmptyState>
            )}
          </Painel>
        </Container>
      </Page>
    </ThemeProvider>
  )
}

export default App
