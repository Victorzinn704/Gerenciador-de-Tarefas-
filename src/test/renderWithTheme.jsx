import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../styles/themes'

export function renderWithTheme(ui) {
  return render(<ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>)
}
