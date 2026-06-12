import styled from 'styled-components'

export const Page = styled.main`
  min-height: 100vh;
  padding: 48px 20px;
`

export const Container = styled.section`
  width: min(100%, 720px);
  margin: 0 auto;
`

export const Painel = styled.section`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  padding: 24px;

  @media (max-width: 560px) {
    padding: 18px;
  }
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

export const InputTarefa = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surfaceSoft};
  color: ${({ theme }) => theme.colors.text};
  min-height: 48px;
  padding: 0 14px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }
`

export const SubmitButton = styled.button`
  border: 0;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryText};
  min-height: 48px;
  padding: 0 18px;
  font-weight: 700;
  transition:
    filter 0.2s ease,
    transform 0.2s ease;

  &:hover {
    filter: brightness(1.05);
    transform: translateY(-1px);
  }
`

export const Resumo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 20px 0;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

export const ResumoItem = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surfaceSoft};
  padding: 14px;

  strong {
    display: block;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.6rem;
    line-height: 1;
  }

  span {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.9rem;
  }
`

export const FilterGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`

export const FilterButton = styled.button`
  border: 1px solid
    ${({ $ativo, theme }) =>
      $ativo ? theme.colors.primary : theme.colors.border};
  border-radius: 8px;
  background: ${({ $ativo, theme }) =>
    $ativo ? theme.colors.primary : theme.colors.surface};
  color: ${({ $ativo, theme }) =>
    $ativo ? theme.colors.primaryText : theme.colors.text};
  min-height: 40px;
  padding: 0 14px;
  font-weight: 700;
  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

export const ListaTarefas = styled.ul`
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const TaskItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ $concluida, theme }) =>
    $concluida ? theme.colors.surfaceSoft : theme.colors.surface};
  padding: 12px;

  @media (max-width: 560px) {
    align-items: stretch;
    flex-direction: column;
  }
`

export const TarefaContent = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`

export const CheckBox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: ${({ theme }) => theme.colors.success};
  flex: 0 0 auto;
`

export const TarefaTexto = styled.span`
  color: ${({ $concluida, theme }) =>
    $concluida ? theme.colors.muted : theme.colors.text};
  overflow-wrap: anywhere;
  text-decoration: ${({ $concluida }) =>
    $concluida ? 'line-through' : 'none'};
`

export const RemoverButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: transparent;
  color: ${({ theme }) => theme.colors.danger};
  min-height: 38px;
  padding: 0 12px;
  font-weight: 700;
  transition:
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.danger};
    background: ${({ theme }) => theme.colors.surfaceSoft};
  }
`

export const EmptyState = styled.p`
  margin: 0;
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.muted};
  padding: 22px;
  text-align: center;
`
