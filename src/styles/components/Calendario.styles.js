import styled from 'styled-components'

export const CalendarPanel = styled.section`
  display: grid;
  gap: 12px;
`

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`

export const CalendarTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.92rem;
  font-weight: 600;
  text-transform: capitalize;
`

export const MonthButton = styled.button`
  display: inline-grid;
  width: 30px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  place-items: center;

  & + & {
    margin-left: 4px;
  }
`

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 2px;
`

export const CalendarWeekday = styled.span`
  color: ${({ theme }) => theme.colors.muted};
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.68rem;
  padding: 0 0 4px;
  text-align: center;
`

export const CalendarDay = styled.button`
  display: grid;
  min-height: 34px;
  border: 1px solid
    ${({ $ativo, theme }) => ($ativo ? theme.colors.primary : 'transparent')};
  border-radius: 4px;
  background: ${({ $ativo, theme }) =>
    $ativo ? theme.colors.surface : 'transparent'};
  color: ${({ $ativo, theme }) =>
    $ativo ? theme.colors.text : theme.colors.muted};
  place-items: center;

  &:hover {
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
  }
`

export const DotGroup = styled.span`
  display: flex;
  gap: 2px;
  min-height: 5px;
  margin-top: 2px;
`

export const PeriodDot = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: ${({ $periodo, theme }) => theme.periods[$periodo].solid};
`

export const CalendarLegend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.74rem;

  span {
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }
`
