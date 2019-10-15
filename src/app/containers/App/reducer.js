import { createReducer, createSetter } from "@redux/reducer";

import * as actions from "./actions";

const initialState = {
  selectedNumber: ""
};

export default createReducer(initialState, {
  [actions.setSelectedNumber]: createSetter("selectedNumber"),
  [actions.reset]: initialState
});
