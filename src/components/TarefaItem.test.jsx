import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import TarefaItem from './TarefaItem'
import { renderWithTheme } from '../test/renderWithTheme'

const tarefaBase = {
  id: 'tarefa-1',
  titulo: 'Treino',
  descricao: 'Corrida leve no parque.',
  data: '2026-06-12',
  horario: '09:00',
  periodo: 'manha',
  concluida: false,
}

describe('TarefaItem', () => {
  it('marca a tarefa como concluida ou ativa', async () => {
    const user = userEvent.setup()
    const alternarTarefa = vi.fn()

    renderWithTheme(
      <TarefaItem
        tarefa={tarefaBase}
        alternarTarefa={alternarTarefa}
        editarTarefa={vi.fn()}
        removerTarefa={vi.fn()}
      />,
    )

    await user.click(screen.getByLabelText(/Marcar Treino como concluida/i))

    expect(alternarTarefa).toHaveBeenCalledWith('tarefa-1')
  })

  it('edita horario e recalcula periodo antes de salvar', async () => {
    const user = userEvent.setup()
    const editarTarefa = vi.fn()

    renderWithTheme(
      <TarefaItem
        tarefa={tarefaBase}
        alternarTarefa={vi.fn()}
        editarTarefa={editarTarefa}
        removerTarefa={vi.fn()}
      />,
    )

    await user.click(screen.getByRole('button', { name: /Editar/i }))
    await user.click(screen.getByRole('button', { name: 'Selecionar hora' }))
    await user.click(screen.getByRole('option', { name: '19' }))
    await user.click(screen.getByRole('button', { name: 'Selecionar minuto' }))
    await user.click(screen.getByRole('option', { name: '05' }))
    await user.click(screen.getByRole('button', { name: /Salvar/i }))

    expect(editarTarefa).toHaveBeenCalledWith(
      'tarefa-1',
      expect.objectContaining({
        horario: '19:05',
        periodo: 'noite',
      }),
    )
  })
})
