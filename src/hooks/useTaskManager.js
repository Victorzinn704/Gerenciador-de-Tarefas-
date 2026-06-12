import { useEffect, useReducer } from 'react'
import {
  criarId,
  formatarDataKey,
  hojeKey,
  periodoPorHorario,
} from '../utils/tarefaUtils'

const STORAGE_KEY = 'lista-tarefas-tema-dinamico:v2'

function criarEstadoInicial() {
  const hoje = hojeKey()

  return {
    tarefas: [],
    historico: [],
    filtroAtual: 'todas',
    dataSelecionada: hoje,
    mesVisivel: hoje.slice(0, 7),
    temaAtual: 'claro',
  }
}

function normalizarTarefa(tarefa) {
  return {
    id: tarefa.id ?? criarId(),
    titulo: tarefa.titulo ?? tarefa.texto ?? 'Tarefa sem titulo',
    descricao: tarefa.descricao ?? 'Sem descricao cadastrada.',
    data: tarefa.data ?? hojeKey(),
    horario: tarefa.horario ?? '',
    periodo: tarefa.periodo ?? periodoPorHorario(tarefa.horario ?? ''),
    concluida: Boolean(tarefa.concluida),
    criadaEm: tarefa.criadaEm ?? new Date().toISOString(),
    atualizadaEm: tarefa.atualizadaEm ?? new Date().toISOString(),
  }
}

function carregarEstado() {
  const inicial = criarEstadoInicial()

  try {
    const salvo = JSON.parse(localStorage.getItem(STORAGE_KEY))

    if (!salvo) {
      return inicial
    }

    return {
      ...inicial,
      ...salvo,
      tarefas: Array.isArray(salvo.tarefas)
        ? salvo.tarefas.map(normalizarTarefa)
        : [],
      historico: Array.isArray(salvo.historico) ? salvo.historico : [],
    }
  } catch {
    return inicial
  }
}

function criarRegistroHistorico(acao, tarefa) {
  return {
    id: criarId(),
    tarefaId: tarefa.id,
    acao,
    titulo: tarefa.titulo,
    descricao: tarefa.descricao,
    data: tarefa.data,
    horario: tarefa.horario,
    periodo: tarefa.periodo,
    criadoEm: new Date().toISOString(),
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'adicionar': {
      const agora = new Date().toISOString()
      const tarefa = normalizarTarefa({
        ...action.payload,
        id: criarId(),
        criadaEm: agora,
        atualizadaEm: agora,
        concluida: false,
      })

      return {
        ...state,
        tarefas: [tarefa, ...state.tarefas],
        historico: [criarRegistroHistorico('criada', tarefa), ...state.historico],
      }
    }

    case 'alternar': {
      let tarefaAtualizada
      const tarefas = state.tarefas.map((tarefa) => {
        if (tarefa.id !== action.id) {
          return tarefa
        }

        tarefaAtualizada = {
          ...tarefa,
          concluida: !tarefa.concluida,
          atualizadaEm: new Date().toISOString(),
        }

        return tarefaAtualizada
      })

      if (!tarefaAtualizada) {
        return state
      }

      return {
        ...state,
        tarefas,
        historico: [
          criarRegistroHistorico(
            tarefaAtualizada.concluida ? 'concluida' : 'reaberta',
            tarefaAtualizada,
          ),
          ...state.historico,
        ],
      }
    }

    case 'editar': {
      let tarefaAtualizada
      const tarefas = state.tarefas.map((tarefa) => {
        if (tarefa.id !== action.id) {
          return tarefa
        }

        tarefaAtualizada = normalizarTarefa({
          ...tarefa,
          ...action.payload,
          atualizadaEm: new Date().toISOString(),
        })

        return tarefaAtualizada
      })

      if (!tarefaAtualizada) {
        return state
      }

      return {
        ...state,
        tarefas,
        historico: [criarRegistroHistorico('editada', tarefaAtualizada), ...state.historico],
      }
    }

    case 'remover': {
      const tarefaRemovida = state.tarefas.find((tarefa) => tarefa.id === action.id)

      if (!tarefaRemovida) {
        return state
      }

      return {
        ...state,
        tarefas: state.tarefas.filter((tarefa) => tarefa.id !== action.id),
        historico: [
          criarRegistroHistorico('removida', tarefaRemovida),
          ...state.historico,
        ],
      }
    }

    case 'filtrar':
      return { ...state, filtroAtual: action.filtro }

    case 'selecionar-data':
      return {
        ...state,
        dataSelecionada: action.data,
        mesVisivel: action.data.slice(0, 7),
      }

    case 'mudar-mes': {
      const [ano, mes] = state.mesVisivel.split('-').map(Number)
      const proximoMes = new Date(ano, mes - 1 + action.offset, 1)

      return {
        ...state,
        mesVisivel: formatarDataKey(proximoMes).slice(0, 7),
      }
    }

    case 'alternar-tema':
      return {
        ...state,
        temaAtual: state.temaAtual === 'claro' ? 'escuro' : 'claro',
      }

    default:
      return state
  }
}

export function useTaskManager() {
  const [state, dispatch] = useReducer(reducer, undefined, carregarEstado)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  return {
    state,
    adicionarTarefa: (payload) => dispatch({ type: 'adicionar', payload }),
    alternarTarefa: (id) => dispatch({ type: 'alternar', id }),
    editarTarefa: (id, payload) => dispatch({ type: 'editar', id, payload }),
    removerTarefa: (id) => dispatch({ type: 'remover', id }),
    alterarFiltro: (filtro) => dispatch({ type: 'filtrar', filtro }),
    selecionarData: (data) => dispatch({ type: 'selecionar-data', data }),
    mudarMes: (offset) => dispatch({ type: 'mudar-mes', offset }),
    alternarTema: () => dispatch({ type: 'alternar-tema' }),
  }
}
