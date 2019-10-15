import { createSelectors } from "@redux/selector";

import { NAME } from "./constants";

export const [getSelectedNumber] = createSelectors(NAME, ["selectedNumber"]);

export default {};
