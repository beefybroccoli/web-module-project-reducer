export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY, payload: 0 };
};

export const MEMORY_CLEAR = "MEMORY_CLEAR";
export const MEMORY_APPLY = "MEMORY_APPLY";
export const MEMORY_STORE = "MEMORY_STORE";
export const memoryClear = () => {
  return { type: MEMORY_CLEAR, payload: 0 };
};
export const memoryApply = (appliedValue) => {
  return { type: MEMORY_APPLY, payload: appliedValue };
};
export const memoryStore = (storedValue) => {
  return { type: MEMORY_STORE, payload: storedValue };
};
