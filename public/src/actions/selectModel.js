export const CHANGE_MODEL_SELECTION = 'CHANGE_MODEL_SELECTION ';

export const selectModel = (selectedModel) => ({
  type: CHANGE_MODEL_SELECTION,
  payload: {model: selectedModel}
})