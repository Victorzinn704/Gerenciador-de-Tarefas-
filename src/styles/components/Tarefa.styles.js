import styled from 'styled-components'

export const Page = styled.main`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`

export const AppShell = styled.section`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.surface};
`

export const Workbench = styled.div`
  display: grid;
  grid-template-columns: 304px minmax(0, 1fr);
  min-height: calc(100vh - 58px);

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

export const ControlPanel = styled.aside`
  border-right: 1px solid ${({ theme }) => theme.colors.borderSoft};
  background: ${({ theme }) => theme.colors.surfaceSoft};
  padding: 24px;

  @media (max-width: 860px) {
    border-right: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderSoft};
  }
`

export const TaskPanel = styled.section`
  padding: 28px 34px;

  @media (max-width: 640px) {
    padding: 22px 18px;
  }
`

export const SidebarBlock = styled.section`
  & + & {
    margin-top: 28px;
    padding-top: 22px;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }
`

export const SectionEyebrow = styled.span`
  display: block;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.72rem;
  font-weight: 500;
  text-transform: uppercase;
`

export const SidebarTitle = styled.h2`
  margin: 0 0 14px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-weight: 600;
`

export const SectionTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.25;
`

export const ProgressPanel = styled.section`
  margin-top: 28px;
  padding-top: 22px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  gap: 24px;
  max-width: 1180px;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`

export const ProgressHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;

  span {
    color: ${({ theme }) => theme.colors.muted};
  }
`

export const ProgressTrack = styled.div`
  height: 6px;
  margin: 12px 0 16px;
  background: ${({ theme }) => theme.colors.surfaceStrong};
`

export const ProgressFill = styled.div`
  width: ${({ $percentual }) => `${$percentual}%`};
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  transition: width 0.25s ease;
`

export const ResumoLinha = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
`

export const ResumoItem = styled.div`
  padding: 12px;

  & + & {
    border-left: 1px solid ${({ theme }) => theme.colors.borderSoft};
  }
`

export const StatValue = styled.strong`
  display: block;
  color: ${({ theme }) => theme.colors.text};
  font-family: "IBM Plex Mono", monospace;
  font-size: 1.12rem;
  font-weight: 500;
`

export const StatLabel = styled.span`
  display: block;
  margin-top: 3px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.76rem;
`

export const TaskHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  max-width: 900px;
  margin-bottom: 20px;
`

export const TaskTotal = styled.span`
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.muted};
  padding: 5px 9px;
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.75rem;
  white-space: nowrap;
`

export const FilterGroup = styled.div`
  display: grid;
  gap: 2px;
`

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 34px;
  border: 0;
  border-left: 2px solid
    ${({ $ativo, theme }) => ($ativo ? theme.colors.primary : 'transparent')};
  background: ${({ $ativo, theme }) =>
    $ativo ? theme.colors.surface : 'transparent'};
  color: ${({ $ativo, theme }) =>
    $ativo ? theme.colors.text : theme.colors.muted};
  padding: 0 10px;
  font-weight: 500;
  text-align: left;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.surface};
  }
`

export const TaskTableHead = styled.div`
  display: grid;
  grid-template-columns: 86px minmax(0, 1fr) auto;
  gap: 14px;
  max-width: 900px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.muted};
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.72rem;
  padding: 0 12px 9px;
  text-transform: uppercase;

  @media (max-width: 640px) {
    display: none;
  }
`

export const ListaTarefas = styled.ul`
  display: grid;
  max-width: 900px;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const EmptyState = styled.p`
  max-width: 900px;
  margin: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.muted};
  padding: 24px 12px;
`
