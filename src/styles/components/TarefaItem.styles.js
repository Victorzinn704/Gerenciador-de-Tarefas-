import styled from 'styled-components'

export const TaskItem = styled.li`
  display: grid;
  grid-template-columns: ${({ $editing }) =>
    $editing ? 'minmax(0, 1fr) auto' : '86px minmax(0, 1fr) auto'};
  align-items: center;
  gap: 14px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderSoft};
  background: ${({ $concluida, theme }) =>
    $concluida ? theme.colors.successSoft : theme.colors.surface};
  box-shadow: inset 3px 0 0
    ${({ $periodo, theme }) => theme.periods[$periodo ?? 'manha'].solid};
  padding: 14px 12px 14px 14px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    align-items: stretch;
  }
`

export const TarefaTime = styled.div`
  display: grid;
  align-content: center;
  min-height: 54px;
  border: 1px solid ${({ $periodo, theme }) => theme.periods[$periodo].solid};
  border-radius: 4px;
  background: ${({ $periodo, theme }) => theme.periods[$periodo].soft};
  color: ${({ $periodo, theme }) => theme.periods[$periodo].text};
  padding: 7px 8px;

  @media (max-width: 640px) {
    width: fit-content;
    min-width: 86px;
  }
`

export const TimeValue = styled.strong`
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.1;
`

export const TimePeriod = styled.span`
  margin-top: 3px;
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
`

export const TarefaContent = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
`

export const CheckBox = styled.input`
  position: absolute;
  width: 20px;
  height: 20px;
  opacity: 0;
`

export const CheckVisual = styled.span`
  display: grid;
  width: 20px;
  height: 20px;
  border: 1px solid
    ${({ $concluida, theme }) =>
      $concluida ? theme.colors.success : theme.colors.border};
  border-radius: 3px;
  background: ${({ $concluida, theme }) =>
    $concluida ? theme.colors.success : theme.colors.surface};
  color: #ffffff;
  flex: 0 0 auto;
  place-items: center;

  ${CheckBox}:focus-visible + & {
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }
`

export const TarefaTexto = styled.span`
  display: block;
  color: ${({ $concluida, theme }) =>
    $concluida ? theme.colors.muted : theme.colors.text};
  font-weight: 600;
  overflow-wrap: anywhere;
  text-decoration: ${({ $concluida }) =>
    $concluida ? 'line-through' : 'none'};
`

export const TarefaDescription = styled.span`
  display: block;
  margin-top: 3px;
  color: ${({ theme }) => theme.colors.muted};
`

export const TarefaMeta = styled.small`
  display: inline-block;
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.muted};
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.72rem;
`

export const TaskActions = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;

  @media (max-width: 640px) {
    justify-content: flex-start;
  }
`

export const ActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  min-height: 32px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  padding: 0 9px;
  font-weight: 500;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const RemoverButton = styled(ActionButton)`
  color: ${({ theme }) => theme.colors.danger};

  &:hover {
    border-color: ${({ theme }) => theme.colors.danger};
    background: ${({ theme }) => theme.colors.dangerSoft};
    color: ${({ theme }) => theme.colors.danger};
  }
`

export const EditGrid = styled.div`
  display: grid;
  gap: 8px;

  @media (min-width: 720px) {
    grid-template-columns: minmax(0, 1fr) 170px;

    textarea,
    [data-span="full"] {
      grid-column: 1 / -1;
    }
  }
`

export const EditActions = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  justify-content: flex-end;
`
