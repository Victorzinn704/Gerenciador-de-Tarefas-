import { useState } from 'react'
import { Plus } from 'lucide-react'
import HorarioPicker from './HorarioPicker'
import PeriodoPreview from './PeriodoPreview'
import {
  ContextNote,
  Form,
  FormError,
  FormHelp,
  FormLabel,
  FormRow,
  InputTarefa,
  SubmitButton,
  TextAreaTarefa,
} from '../styles/components/Formulario.styles'
import {
  formatarDataCompleta,
  normalizarHorario,
  periodoPorHorario,
} from '../utils/tarefaUtils'

function FormularioTarefa({ adicionarTarefa, dataSelecionada }) {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [horario, setHorario] = useState('')
  const [erro, setErro] = useState('')

  const alterarHorario = (valor) => {
    setHorario(normalizarHorario(valor))
    setErro('')
  }

  const lidarComEnvio = (event) => {
    event.preventDefault()

    const tituloLimpo = titulo.trim()
    const descricaoLimpa = descricao.trim()
    const horarioNormalizado = normalizarHorario(horario)

    if (!tituloLimpo || !descricaoLimpa || !horarioNormalizado) {
      setErro('Preencha titulo, explicacao e horario para classificar a tarefa.')
      return
    }

    adicionarTarefa({
      titulo: tituloLimpo,
      descricao: descricaoLimpa,
      data: dataSelecionada,
      horario: horarioNormalizado,
      periodo: periodoPorHorario(horarioNormalizado),
    })

    setTitulo('')
    setDescricao('')
    setHorario('')
    setErro('')
  }

  const periodo = periodoPorHorario(horario)

  return (
    <Form onSubmit={lidarComEnvio}>
      <ContextNote>
        Agendada para {formatarDataCompleta(dataSelecionada)}.
      </ContextNote>

      <FormRow>
        <FormLabel htmlFor="titulo-tarefa">Titulo</FormLabel>
        <InputTarefa
          id="titulo-tarefa"
          type="text"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
          placeholder="Ex: Futebol"
          aria-label="Nova tarefa"
        />
      </FormRow>

      <FormRow>
        <FormLabel htmlFor="descricao-tarefa">Explicacao</FormLabel>
        <TextAreaTarefa
          id="descricao-tarefa"
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
          placeholder="Ex: Jogar bola hoje as 12h"
          rows={3}
        />
      </FormRow>

      <FormRow>
        <FormLabel htmlFor="horario-tarefa-hora">Horario</FormLabel>
        <HorarioPicker
          id="horario-tarefa"
          value={horario}
          onChange={alterarHorario}
        />
        <FormHelp>
          A cor e o periodo sao calculados pelo horario: manha 04h-11h59,
          tarde 12h-17h59, noite 18h-03h59.
        </FormHelp>
      </FormRow>

      <PeriodoPreview periodo={horario ? periodo : ''} />

      {erro && <FormError>{erro}</FormError>}

      <SubmitButton type="submit">
        <Plus size={18} strokeWidth={2.4} />
        Adicionar
      </SubmitButton>
    </Form>
  )
}

export default FormularioTarefa
