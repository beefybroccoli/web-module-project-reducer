export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

const dispatch = (operationType) => {
  if (operationType === ADD_ONE) {
    return addOne;
  } else if (operationType === APPLY_NUMBER) {
    return applyNumber;
  } else {
    return null;
  }
};

export default dispatch;
