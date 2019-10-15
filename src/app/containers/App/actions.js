import { createSetterActions, createAction } from "@redux/action";

import { NAME } from "./constants";

export const [setSelectedNumber] = createSetterActions(NAME, [
  "selectedNumber"
]);

export const reset = createAction(`${NAME}/RESET`);
