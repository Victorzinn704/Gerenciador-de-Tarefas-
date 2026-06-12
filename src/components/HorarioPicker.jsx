import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import {
  HorarioColumn,
  HorarioControl,
  HorarioMenu,
  HorarioOption,
  HorarioPickerShell,
  HorarioSeparator,
  HorarioTrigger,
} from '../styles/components/HorarioPicker.styles'
import {
  horasDisponiveis,
  minutosDisponiveis,
  montarHorario,
  obterPartesHorario,
} from '../utils/tarefaUtils'

function HorarioPicker({ id = 'horario', value, onChange }) {
  const [menuAberto, setMenuAberto] = useState(null)
  const { hora, minuto } = obterPartesHorario(value)

  const fecharAoSair = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setMenuAberto(null)
    }
  }

  const alternarMenu = (tipo) => {
    setMenuAberto((atual) => (atual === tipo ? null : tipo))
  }

  const selecionarParte = (tipo, valor) => {
    const proximaHora = tipo === 'hora' ? valor : hora || '12'
    const proximoMinuto = tipo === 'minuto' ? valor : minuto || '00'

    onChange(montarHorario(proximaHora, proximoMinuto))
    setMenuAberto(null)
  }

  const renderizarMenu = (tipo, opcoes, valorAtual) => (
    <HorarioMenu role="listbox" aria-labelledby={`${id}-${tipo}`}>
      {opcoes.map((opcao) => (
        <HorarioOption
          key={opcao}
          type="button"
          role="option"
          $selected={valorAtual === opcao}
          aria-selected={valorAtual === opcao}
          onClick={() => selecionarParte(tipo, opcao)}
        >
          {opcao}
        </HorarioOption>
      ))}
    </HorarioMenu>
  )

  return (
    <HorarioPickerShell onBlur={fecharAoSair}>
      <HorarioControl>
        <HorarioColumn>
          <HorarioTrigger
            id={`${id}-hora`}
            type="button"
            $open={menuAberto === 'hora'}
            $empty={!hora}
            aria-haspopup="listbox"
            aria-expanded={menuAberto === 'hora'}
            aria-label="Selecionar hora"
            onClick={() => alternarMenu('hora')}
          >
            <span>{hora || 'Hora'}</span>
            <ChevronDown size={15} strokeWidth={2.2} />
          </HorarioTrigger>

          {menuAberto === 'hora' &&
            renderizarMenu('hora', horasDisponiveis, hora)}
        </HorarioColumn>

        <HorarioSeparator aria-hidden="true">:</HorarioSeparator>

        <HorarioColumn>
          <HorarioTrigger
            id={`${id}-minuto`}
            type="button"
            $open={menuAberto === 'minuto'}
            $empty={!minuto}
            aria-haspopup="listbox"
            aria-expanded={menuAberto === 'minuto'}
            aria-label="Selecionar minuto"
            onClick={() => alternarMenu('minuto')}
          >
            <span>{minuto || 'Min'}</span>
            <ChevronDown size={15} strokeWidth={2.2} />
          </HorarioTrigger>

          {menuAberto === 'minuto' &&
            renderizarMenu('minuto', minutosDisponiveis, minuto)}
        </HorarioColumn>
      </HorarioControl>
    </HorarioPickerShell>
  )
}

export default HorarioPicker
