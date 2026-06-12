import styled from 'styled-components'

export const HorarioPickerShell = styled.div`
  display: grid;
  gap: 6px;
`

export const HorarioControl = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  gap: 6px;
`

export const HorarioColumn = styled.div`
  position: relative;
`

export const HorarioTrigger = styled.button`
  appearance: none;
  display: flex;
  width: 100%;
  min-height: 42px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border: 1px solid
    ${({ $open, theme }) => ($open ? theme.colors.primary : theme.colors.border)};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.control};
  color: ${({ $empty, theme }) =>
    $empty ? theme.colors.muted : theme.colors.text};
  padding: 0 10px 0 12px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.92rem;
  font-weight: 500;
  transition:
    border-color 0.15s ease,
    background 0.15s ease,
    color 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

export const HorarioSeparator = styled.span`
  color: ${({ theme }) => theme.colors.muted};
  font-family: "IBM Plex Mono", monospace;
  font-weight: 600;
`

export const HorarioMenu = styled.div`
  position: absolute;
  z-index: 20;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  display: grid;
  max-height: 194px;
  overflow: auto;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.popover};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  padding: 4px;
`

export const HorarioOption = styled.button`
  appearance: none;
  min-height: 30px;
  border: 0;
  border-radius: 3px;
  background: ${({ $selected, theme }) =>
    $selected ? theme.colors.primarySoft : 'transparent'};
  color: ${({ $selected, theme }) =>
    $selected ? theme.colors.primary : theme.colors.text};
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.84rem;
  text-align: left;
  padding: 0 8px;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceStrong};
  }
`
