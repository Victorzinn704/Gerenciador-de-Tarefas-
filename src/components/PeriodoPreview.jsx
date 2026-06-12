import { PeriodButton, PeriodSelector } from '../styles/components/Formulario.styles'
import { periodos } from '../utils/tarefaUtils'

function PeriodoPreview({ periodo }) {
  return (
    <PeriodSelector aria-label="Classificacao automatica por horario">
      {periodos.map((item) => (
        <PeriodButton
          as="span"
          key={item.valor}
          $ativo={periodo === item.valor}
          $periodo={item.valor}
          $readonly
          title={item.legenda}
        >
          {item.label}
        </PeriodButton>
      ))}
    </PeriodSelector>
  )
}

export default PeriodoPreview
