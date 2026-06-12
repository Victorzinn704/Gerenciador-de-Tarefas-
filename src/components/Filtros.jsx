import { CheckCircle2, Circle, ListTodo } from 'lucide-react'
import {
  FilterButton,
  FilterGroup,
} from '../styles/components/Tarefa.styles'

const filtros = [
  { valor: 'todas', label: 'Todas', Icone: ListTodo },
  { valor: 'ativas', label: 'Ativas', Icone: Circle },
  { valor: 'concluidas', label: 'Concluidas', Icone: CheckCircle2 },
]

function Filtros({ filtroAtual, alterarFiltro }) {
  return (
    <FilterGroup aria-label="Filtrar tarefas por status">
      {filtros.map((filtro) => (
        <FilterButton
          key={filtro.valor}
          type="button"
          $ativo={filtroAtual === filtro.valor}
          onClick={() => alterarFiltro(filtro.valor)}
        >
          <filtro.Icone size={16} strokeWidth={2.2} />
          {filtro.label}
        </FilterButton>
      ))}
    </FilterGroup>
  )
}

export default Filtros
