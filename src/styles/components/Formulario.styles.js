import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  gap: 12px;
`

export const ContextNote = styled.p`
  margin: -2px 0 2px;
  border-left: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.muted};
  background: ${({ theme }) => theme.colors.primarySoft};
  padding: 8px 10px;
  font-size: 0.78rem;
  line-height: 1.45;
`

export const FormRow = styled.div`
  display: grid;
  gap: 6px;
`

export const FormLabel = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.82rem;
  font-weight: 600;
`

export const FormHelp = styled.small`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.72rem;
  line-height: 1.45;
`

export const FormError = styled.small`
  border-left: 2px solid ${({ theme }) => theme.colors.danger};
  background: ${({ theme }) => theme.colors.dangerSoft};
  color: ${({ theme }) => theme.colors.danger};
  padding: 7px 9px;
  font-size: 0.74rem;
  line-height: 1.4;
`

export const InputTarefa = styled.input`
  width: 100%;
  min-height: 42px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.control};
  color: ${({ theme }) => theme.colors.text};
  padding: 0 12px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }
`

export const TextAreaTarefa = styled.textarea`
  width: 100%;
  resize: vertical;
  min-height: 74px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.control};
  color: ${({ theme }) => theme.colors.text};
  padding: 10px 12px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }
`

export const PeriodSelector = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
`

export const PeriodButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 34px;
  border: 1px solid
    ${({ $ativo, $periodo, theme }) =>
      $ativo ? theme.periods[$periodo].solid : theme.colors.border};
  border-radius: 4px;
  background: ${({ $ativo, $periodo, theme }) =>
    $ativo ? theme.periods[$periodo].soft : theme.colors.surface};
  color: ${({ $ativo, $periodo, theme }) =>
    $ativo ? theme.periods[$periodo].text : theme.colors.muted};
  font-weight: 600;
  cursor: ${({ $readonly }) => ($readonly ? 'default' : 'pointer')};

  &:disabled {
    opacity: 1;
  }
`

export const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 40px;
  border: 0;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryText};
  padding: 0 14px;
  font-weight: 600;

  &:hover {
    filter: brightness(1.04);
  }
`
