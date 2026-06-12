import {
  CheckBox,
  RemoverButton,
  TarefaContent,
  TarefaTexto,
  TaskItem,
} from '../styles/components/Tarefa.styles'

function TarefaItem({ tarefa, alternarTarefa, removerTarefa }) {
  return (
    <TaskItem $concluida={tarefa.concluida}>
      <TarefaContent>
        <CheckBox
          type="checkbox"
          checked={tarefa.concluida}
          onChange={() => alternarTarefa(tarefa.id)}
          aria-label={`Marcar ${tarefa.texto} como ${
            tarefa.concluida ? 'ativa' : 'concluida'
          }`}
        />
        <TarefaTexto $concluida={tarefa.concluida}>{tarefa.texto}</TarefaTexto>
      </TarefaContent>

      <RemoverButton type="button" onClick={() => removerTarefa(tarefa.id)}>
        Remover
      </RemoverButton>
    </TaskItem>
  )
}

export default TarefaItem
