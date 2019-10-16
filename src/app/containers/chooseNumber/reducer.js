import { createReducer, createSetter } from "../../redux/reducer";

import * as actions from "./actions";

export default createReducer(
  {
    requestCount: 0,
    availableNumber: ""
  },
  {
    [actions.incrementRequestCount]: state => ({
      ...state,
      requestCount: state.requestCount + 1
    }),
    [actions.decrementRequestCount]: state => ({
      ...state,
      requestCount: state.requestCount > 0 ? state.requestCount - 1 : 0
    }),
    [actions.setAvailableNumber]: createSetter("availableNumber")
  }
);
