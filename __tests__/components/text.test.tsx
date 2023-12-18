import { Text } from '@atoms'
import { render, screen } from '@testing-library/react-native'
import { withThemeProvider } from '../utils/customRender'

const text = 'Demo Text'

describe('Text component', () => {
  beforeEach(() => {
    render(withThemeProvider(<Text variant="large">{text}</Text>))
  })
  test('Render component', () => {
    expect(screen).toMatchSnapshot()
  })
  test('Accessibility', () => {
    const value = screen.getByRole('text')
    expect(value).toBeOnTheScreen()
    expect(value).toBeVisible()
    expect(value.props.accessibilityRole).toBe('text')
    expect(value.props.children).toBe(text)
    expect(value.props['aria-label']).toBe(text)
  })
  test('Visiblity & text value', () => {
    const value = screen.getByText(text)
    expect(value).toBeOnTheScreen()
    expect(value).toBeVisible()
    expect(value.props.children).toBe(text)
  })
})