import { globalSearchTypes } from '../types';

const { SELECTED, SCREEN } = globalSearchTypes;

export const selected = (item, screen) => ({
  type: SELECTED,
  data: {
    item,
    screen,
  },
});

export const screen = (selectedScreen) => ({
  type: SCREEN,
  selectedScreen,
});
