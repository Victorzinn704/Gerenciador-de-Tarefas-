import { Clock3 } from 'lucide-react'
import {
  HistoryEmpty,
  HistoryItem,
  HistoryList,
  HistoryMeta,
  HistoryPanel,
  HistoryTitle,
} from '../styles/components/Historico.styles'
import { formatarDataCurta, formatarHorario } from '../utils/tarefaUtils'

const labelsAcao = {
  criada: 'Criada',
  editada: 'Editada',
  concluida: 'Concluida',
  reaberta: 'Reaberta',
  removida: 'Removida',
}

function formatarMomento(isoDate) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(isoDate))
}

function HistoricoTarefas({ historico }) {
  return (
    <HistoryPanel aria-label="Historico de tarefas">
      <HistoryTitle>
        <Clock3 size={17} />
        Historico
      </HistoryTitle>

      {historico.length > 0 ? (
        <HistoryList>
          {historico.slice(0, 8).map((item) => (
            <HistoryItem key={item.id} $acao={item.acao}>
              <strong>{labelsAcao[item.acao] ?? item.acao}</strong>
              <span>{item.titulo}</span>
              <HistoryMeta>
                {formatarDataCurta(item.data)} · {formatarHorario(item.horario)} ·{' '}
                {formatarMomento(item.criadoEm)}
              </HistoryMeta>
            </HistoryItem>
          ))}
        </HistoryList>
      ) : (
        <HistoryEmpty>Nenhuma movimentacao registrada.</HistoryEmpty>
      )}
    </HistoryPanel>
  )
}

export default HistoricoTarefas
