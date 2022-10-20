import { customModalTypes } from '../types';

const { ACTIVE_MODAL } = customModalTypes;

export const activeModal = (value, content) => ({
  type: ACTIVE_MODAL,
  data: {
    value,
    content,
  },
});
