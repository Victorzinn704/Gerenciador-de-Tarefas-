import {
  FilterButton,
  FilterGroup,
} from '../styles/components/Tarefa.styles'

const filtros = [
  { valor: 'todas', label: 'Todas' },
  { valor: 'ativas', label: 'Ativas' },
  { valor: 'concluidas', label: 'Concluidas' },
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
          {filtro.label}
        </FilterButton>
      ))}
    </FilterGroup>
  )
}

export default Filtros
