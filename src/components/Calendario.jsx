import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  CalendarDay,
  CalendarGrid,
  CalendarHeader,
  CalendarLegend,
  CalendarPanel,
  CalendarTitle,
  CalendarWeekday,
  DotGroup,
  MonthButton,
  PeriodDot,
} from '../styles/components/Calendario.styles'
import {
  criarDataPorKey,
  formatarDataKey,
  formatarMesAno,
} from '../utils/tarefaUtils'

const diasSemana = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']

function contarPeriodos(tarefas) {
  return tarefas.reduce((acc, tarefa) => {
    acc[tarefa.periodo] = (acc[tarefa.periodo] ?? 0) + 1
    return acc
  }, {})
}

function criarDiasDoMes(mesVisivel) {
  const [ano, mes] = mesVisivel.split('-').map(Number)
  const primeiroDia = new Date(ano, mes - 1, 1)
  const totalDias = new Date(ano, mes, 0).getDate()
  const deslocamento = (primeiroDia.getDay() + 6) % 7
  const diasVazios = Array.from({ length: deslocamento }, () => null)
  const dias = Array.from({ length: totalDias }, (_, index) =>
    formatarDataKey(new Date(ano, mes - 1, index + 1)),
  )

  return [...diasVazios, ...dias]
}

function Calendario({
  mesVisivel,
  dataSelecionada,
  tarefas,
  mudarMes,
  selecionarData,
}) {
  const tarefasPorData = tarefas.reduce((acc, tarefa) => {
    acc[tarefa.data] = [...(acc[tarefa.data] ?? []), tarefa]
    return acc
  }, {})

  const dias = criarDiasDoMes(mesVisivel)

  return (
    <CalendarPanel>
      <CalendarHeader>
        <CalendarTitle>{formatarMesAno(criarDataPorKey(`${mesVisivel}-01`))}</CalendarTitle>
        <div>
          <MonthButton type="button" onClick={() => mudarMes(-1)} aria-label="Mes anterior">
            <ChevronLeft size={16} />
          </MonthButton>
          <MonthButton type="button" onClick={() => mudarMes(1)} aria-label="Proximo mes">
            <ChevronRight size={16} />
          </MonthButton>
        </div>
      </CalendarHeader>

      <CalendarGrid>
        {diasSemana.map((dia) => (
          <CalendarWeekday key={dia}>{dia}</CalendarWeekday>
        ))}

        {dias.map((dataKey, index) => {
          if (!dataKey) {
            return <span key={`empty-${index}`} />
          }

          const data = criarDataPorKey(dataKey)
          const periodosDoDia = contarPeriodos(tarefasPorData[dataKey] ?? [])

          return (
            <CalendarDay
              key={dataKey}
              type="button"
              $ativo={dataKey === dataSelecionada}
              onClick={() => selecionarData(dataKey)}
            >
              <span>{data.getDate()}</span>
              <DotGroup aria-hidden="true">
                {Object.entries(periodosDoDia).map(([periodo, total]) => (
                  <PeriodDot key={periodo} $periodo={periodo} title={`${total} tarefa(s)`} />
                ))}
              </DotGroup>
            </CalendarDay>
          )
        })}
      </CalendarGrid>

      <CalendarLegend>
        <span><PeriodDot $periodo="manha" /> Manha</span>
        <span><PeriodDot $periodo="tarde" /> Tarde</span>
        <span><PeriodDot $periodo="noite" /> Noite</span>
      </CalendarLegend>
    </CalendarPanel>
  )
}

export default Calendario
