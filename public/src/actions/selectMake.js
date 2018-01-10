export const CHANGE_SELECTION = 'CHANGE_SELECTION';

export const selectMake = (selectedMake) => ({
  type: CHANGE_SELECTION,
  payload: {make: selectedMake}
})