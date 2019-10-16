import { createSelectors } from "@redux/selector";
import { NAME } from "./constants";

// export const isLoading = state => !!state[NAME].requestCount;
export const [getAvailableNumber] = createSelectors(NAME, ["availableNumber"]);

export default {};
