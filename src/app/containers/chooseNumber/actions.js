import { createAction, createSetterActions } from "../../redux/action";
import { API_CALL } from "@services/number.service";
import * as ApiKey from "@services/constants";

import { NAME } from "./constants";

export const incrementRequestCount = createAction(
  `${NAME}/INCREMENT_REQUEST_COUNT`
);
export const decrementRequestCount = createAction(
  `${NAME}/DECREMENT_REQUEST_COUNT`
);
export const [setAvailableNumber] = createSetterActions(NAME, [
  "availableNumber"
]);

export const fetchAvailableNumber = () => async dispatch => {
  const availableNumber = await API_CALL(ApiKey.AVAILABLE_NUMBER);
  dispatch(setAvailableNumber(availableNumber));
};
