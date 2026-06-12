import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderSoft};
  min-height: 58px;
  padding: 0 24px;

  @media (max-width: 680px) {
    padding: 16px 18px;
  }
`

export const HeaderText = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`

export const BrandMark = styled.span`
  display: grid;
  width: 32px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.surfaceSoft};
  color: ${({ theme }) => theme.colors.primary};
  flex: 0 0 auto;
  place-items: center;
`

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.2;
`

export const ThemeButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.surfaceSoft};
  color: ${({ theme }) => theme.colors.text};
  min-height: 36px;
  padding: 0 12px;
  font-size: 0.88rem;
  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const ThemeButtonText = styled.span`
  @media (max-width: 460px) {
    display: none;
  }
`
