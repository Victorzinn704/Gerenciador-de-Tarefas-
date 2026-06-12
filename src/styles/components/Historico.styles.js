import styled from 'styled-components'

export const HistoryPanel = styled.aside`
  border-left: 1px solid ${({ theme }) => theme.colors.borderSoft};
  padding-left: 24px;

  @media (max-width: 1080px) {
    border-top: 1px solid ${({ theme }) => theme.colors.borderSoft};
    border-left: 0;
    padding-top: 20px;
    padding-left: 0;
  }
`

export const HistoryTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 14px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  font-weight: 600;
`

export const HistoryList = styled.ul`
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const HistoryItem = styled.li`
  border-left: 3px solid
    ${({ $acao, theme }) =>
      $acao === 'removida' ? theme.colors.danger : theme.colors.primary};
  background: ${({ theme }) => theme.colors.surfaceSoft};
  padding: 9px 10px;

  strong,
  span {
    display: block;
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.8rem;
  }

  span {
    color: ${({ theme }) => theme.colors.muted};
    margin-top: 2px;
  }
`

export const HistoryMeta = styled.small`
  display: block;
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.muted};
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.68rem;
`

export const HistoryEmpty = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
`
