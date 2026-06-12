import { ListChecks, Moon, Sun } from 'lucide-react'
import {
  BrandMark,
  HeaderContainer,
  HeaderText,
  ThemeButton,
  ThemeButtonText,
  Title,
} from '../styles/components/Header.styles'

function Header({ temaAtual, alternarTema }) {
  const proximoTema = temaAtual === 'claro' ? 'escuro' : 'claro'
  const ThemeIcon = temaAtual === 'claro' ? Moon : Sun

  return (
    <HeaderContainer>
      <HeaderText>
        <BrandMark aria-hidden="true">
          <ListChecks size={20} strokeWidth={2.2} />
        </BrandMark>
        <div>
          <Title>Lista de Tarefas</Title>
        </div>
      </HeaderText>

      <ThemeButton
        type="button"
        onClick={alternarTema}
        aria-label={`Ativar tema ${proximoTema}`}
      >
        <ThemeIcon size={18} strokeWidth={2.1} />
        <ThemeButtonText>Tema {proximoTema}</ThemeButtonText>
      </ThemeButton>
    </HeaderContainer>
  )
}

export default Header
