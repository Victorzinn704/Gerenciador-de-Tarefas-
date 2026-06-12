import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import FormularioTarefa from './FormularioTarefa'
import { renderWithTheme } from '../test/renderWithTheme'

async function selecionarHorario(hora, minuto) {
  const user = userEvent.setup()

  await user.click(screen.getByRole('button', { name: 'Selecionar hora' }))
  await user.click(screen.getByRole('option', { name: hora }))
  await user.click(screen.getByRole('button', { name: 'Selecionar minuto' }))
  await user.click(screen.getByRole('option', { name: minuto }))

  return user
}

describe('FormularioTarefa', () => {
  it('exige titulo, explicacao e horario antes de adicionar', async () => {
    const user = userEvent.setup()
    const adicionarTarefa = vi.fn()

    renderWithTheme(
      <FormularioTarefa
        adicionarTarefa={adicionarTarefa}
        dataSelecionada="2026-06-12"
      />,
    )

    await user.click(screen.getByRole('button', { name: /Adicionar/i }))

    expect(adicionarTarefa).not.toHaveBeenCalled()
    expect(
      screen.getByText(/Preencha titulo, explicacao e horario/i),
    ).toBeInTheDocument()
  })

  it('adiciona tarefa com periodo calculado pelo horario', async () => {
    const adicionarTarefa = vi.fn()

    renderWithTheme(
      <FormularioTarefa
        adicionarTarefa={adicionarTarefa}
        dataSelecionada="2026-06-12"
      />,
    )

    await userEvent.type(screen.getByLabelText('Nova tarefa'), 'Projeto')
    await userEvent.type(
      screen.getByLabelText('Explicacao'),
      'Revisar a documentacao antes de publicar.',
    )

    const user = await selecionarHorario('18', '05')
    await user.click(screen.getByRole('button', { name: /Adicionar/i }))

    expect(adicionarTarefa).toHaveBeenCalledWith({
      titulo: 'Projeto',
      descricao: 'Revisar a documentacao antes de publicar.',
      data: '2026-06-12',
      horario: '18:05',
      periodo: 'noite',
    })
  })
})
