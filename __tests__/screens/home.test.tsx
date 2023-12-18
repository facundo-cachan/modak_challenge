/* eslint-disable @typescript-eslint/ban-ts-comment */
import { describe, expect, test } from '@jest/globals'
import {
  screen
} from '@testing-library/react-native'

import HomeScreen from '@screens/home/index-home'

import { toJSON, waitFor } from '../utils/customRender'

const eventTitle = 'Member Lecture: Empress Dowager Cisheng’s Patronage of Buddhist Art'
describe('HomeScreen screen', () => {
  describe('Render', () => {
    test('SnapShot Screen', () => {
      waitFor(() => {
        toJSON(HomeScreen)
      });
      expect(screen).toMatchSnapshot()
    })
    test('Screen Loading', async () => {
      waitFor(() => {
        toJSON(HomeScreen)
      });
      expect(screen.getByLabelText("Loading")).toBeTruthy()
    })
    test('Screen render texts', async () => {
      const regExp = new RegExp('([A-Z])\w+', 'i')
      await waitFor(() => {
        toJSON(HomeScreen)
      });
      const event = screen.getByRole('text', { name: regExp });
      expect(event).toBeTruthy()
    })
  })
})
