import { useState } from 'react'
import {
  Form,
  InputTarefa,
  SubmitButton,
} from '../styles/components/Tarefa.styles'

function FormularioTarefa({ adicionarTarefa }) {
  const [texto, setTexto] = useState('')

  const lidarComEnvio = (event) => {
    event.preventDefault()

    const tarefa = texto.trim()

    if (!tarefa) {
      return
    }

    adicionarTarefa(tarefa)
    setTexto('')
  }

  return (
    <Form onSubmit={lidarComEnvio}>
      <InputTarefa
        type="text"
        value={texto}
        onChange={(event) => setTexto(event.target.value)}
        placeholder="Digite uma nova tarefa"
        aria-label="Nova tarefa"
      />
      <SubmitButton type="submit">Adicionar</SubmitButton>
    </Form>
  )
}

export default FormularioTarefa
