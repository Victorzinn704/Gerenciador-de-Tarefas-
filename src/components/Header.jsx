import {
  HeaderContainer,
  HeaderText,
  Subtitle,
  ThemeButton,
  Title,
} from '../styles/components/Header.styles'

function Header({ temaAtual, alternarTema }) {
  const proximoTema = temaAtual === 'claro' ? 'escuro' : 'claro'

  return (
    <HeaderContainer>
      <HeaderText>
        <Title>Lista de Tarefas</Title>
        <Subtitle>Organize suas tarefas por status.</Subtitle>
      </HeaderText>

      <ThemeButton
        type="button"
        onClick={alternarTema}
        aria-label={`Ativar tema ${proximoTema}`}
      >
        Tema {proximoTema}
      </ThemeButton>
    </HeaderContainer>
  )
}

export default Header
