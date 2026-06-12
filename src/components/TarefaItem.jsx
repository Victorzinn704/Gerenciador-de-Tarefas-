import { useState } from 'react'
import { Check, Pencil, Save, Trash2, X } from 'lucide-react'
import HorarioPicker from './HorarioPicker'
import PeriodoPreview from './PeriodoPreview'
import { InputTarefa, TextAreaTarefa } from '../styles/components/Formulario.styles'
import {
  ActionButton,
  CheckBox,
  CheckVisual,
  EditActions,
  EditGrid,
  RemoverButton,
  TarefaContent,
  TarefaDescription,
  TarefaMeta,
  TarefaTime,
  TarefaTexto,
  TaskActions,
  TaskItem,
  TimePeriod,
  TimeValue,
} from '../styles/components/TarefaItem.styles'
import {
  formatarDataCurta,
  formatarHorario,
  normalizarHorario,
  obterLabelPeriodo,
  periodoPorHorario,
} from '../utils/tarefaUtils'

function TarefaItem({ tarefa, alternarTarefa, editarTarefa, removerTarefa }) {
  const [editando, setEditando] = useState(false)
  const [form, setForm] = useState({
    titulo: tarefa.titulo,
    descricao: tarefa.descricao,
    data: tarefa.data,
    horario: tarefa.horario,
    periodo: tarefa.periodo,
  })

  const alterarHorario = (valor) => {
    const horarioNormalizado = normalizarHorario(valor)

    setForm((atual) => ({
      ...atual,
      horario: horarioNormalizado,
      periodo: periodoPorHorario(horarioNormalizado),
    }))
  }

  const cancelarEdicao = () => {
    setForm({
      titulo: tarefa.titulo,
      descricao: tarefa.descricao,
      data: tarefa.data,
      horario: tarefa.horario,
      periodo: tarefa.periodo,
    })
    setEditando(false)
  }

  const salvarEdicao = () => {
    const horarioNormalizado = normalizarHorario(form.horario)

    if (!form.titulo.trim() || !form.descricao.trim() || !horarioNormalizado) {
      return
    }

    editarTarefa(tarefa.id, {
      titulo: form.titulo.trim(),
      descricao: form.descricao.trim(),
      data: form.data,
      horario: horarioNormalizado,
      periodo: periodoPorHorario(horarioNormalizado),
    })
    setEditando(false)
  }

  if (editando) {
    return (
      <TaskItem $periodo={form.periodo} $editing>
        <EditGrid>
          <InputTarefa
            value={form.titulo}
            onChange={(event) =>
              setForm((atual) => ({ ...atual, titulo: event.target.value }))
            }
            aria-label="Editar titulo"
          />
          <InputTarefa
            type="date"
            value={form.data}
            onChange={(event) =>
              setForm((atual) => ({ ...atual, data: event.target.value }))
            }
            aria-label="Editar data"
          />
          <TextAreaTarefa
            value={form.descricao}
            onChange={(event) =>
              setForm((atual) => ({ ...atual, descricao: event.target.value }))
            }
            rows={2}
            aria-label="Editar explicacao"
          />
          <div data-span="full">
            <HorarioPicker
              id={`horario-${tarefa.id}`}
              value={form.horario}
              onChange={alterarHorario}
            />
          </div>
          <div data-span="full">
            <PeriodoPreview periodo={form.periodo} />
          </div>
        </EditGrid>

        <EditActions>
          <ActionButton type="button" onClick={salvarEdicao}>
            <Save size={16} />
            Salvar
          </ActionButton>
          <RemoverButton type="button" onClick={cancelarEdicao}>
            <X size={16} />
            Cancelar
          </RemoverButton>
        </EditActions>
      </TaskItem>
    )
  }

  return (
    <TaskItem $concluida={tarefa.concluida} $periodo={tarefa.periodo}>
      <TarefaTime $periodo={tarefa.periodo}>
        <TimeValue>{formatarHorario(tarefa.horario)}</TimeValue>
        <TimePeriod>{obterLabelPeriodo(tarefa.periodo)}</TimePeriod>
      </TarefaTime>

      <TarefaContent>
        <CheckBox
          type="checkbox"
          checked={tarefa.concluida}
          onChange={() => alternarTarefa(tarefa.id)}
          aria-label={`Marcar ${tarefa.titulo} como ${
            tarefa.concluida ? 'ativa' : 'concluida'
          }`}
        />
        <CheckVisual $concluida={tarefa.concluida} aria-hidden="true">
          {tarefa.concluida && <Check size={14} strokeWidth={3} />}
        </CheckVisual>
        <div>
          <TarefaTexto $concluida={tarefa.concluida}>
            {tarefa.titulo}
          </TarefaTexto>
          <TarefaDescription>{tarefa.descricao}</TarefaDescription>
          <TarefaMeta $periodo={tarefa.periodo}>
            {formatarDataCurta(tarefa.data)} · periodo por horario
          </TarefaMeta>
        </div>
      </TarefaContent>

      <TaskActions>
        <ActionButton type="button" onClick={() => setEditando(true)}>
          <Pencil size={16} strokeWidth={2.2} />
          Editar
        </ActionButton>
        <RemoverButton type="button" onClick={() => removerTarefa(tarefa.id)}>
          <Trash2 size={16} strokeWidth={2.2} />
          Remover
        </RemoverButton>
      </TaskActions>
    </TaskItem>
  )
}

export default TarefaItem
