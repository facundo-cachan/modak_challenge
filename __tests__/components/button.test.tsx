import { beforeEach, describe, expect, test } from '@jest/globals'
import {
  act,
  fireEvent,
  screen
} from '@testing-library/react-native'

import { Button } from '@atoms'
import { render, withThemeProvider } from '../utils/customRender'

import type { ButtonProps } from '@atoms/button/button-props'

const props: Partial<ButtonProps> = {
  // @ts-ignore
  onPress: jest.fn(),
  title: 'Button title',
  disabled: false,
  loading: false,
  style: {
    backgroundColor: 'red',
  },
};

export const Btn = () => withThemeProvider(<Button {...props} />);
describe('Testing Buttons', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve([])
    });
    render(<Btn />)
  });
  test('Render', () => {
    expect(screen).toMatchSnapshot()
  });
  test('Visibility title on screen', () => {
    const value = screen.getByText(props.title)
    expect(value).toBeOnTheScreen()
    expect(value).toBeVisible()
    expect(value.props.children).toEqual(props.title)
  })
  test('Find & press button', () => {
    act(() => {
      const pressMe = screen.getByText(props.title);
      expect(pressMe).toBeOnTheScreen();
      fireEvent.press(pressMe);
      act(() => {
        expect(props.onPress).toHaveBeenCalledTimes(1)
      })
    })
  })
  test('Disable & loading', () => {
    render(withThemeProvider(<Button {...props} loading={true} />))
    const value = screen.getByLabelText(props.title)
    expect(value).toBeOnTheScreen()
    expect(value).toBeVisible()
    expect(value.props.children[0].props.icon).toEqual('spinner')
  })
});
