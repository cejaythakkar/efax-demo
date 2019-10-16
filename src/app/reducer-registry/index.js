import { NAME as appName } from "@containers/App/constants";
import appReducer from "@containers/App/reducer";
import {
  NAME as chooseNumber,
  reducer as chooseNumberReducer
} from "@containers/chooseNumber";

export class ReducerRegistry {
  constructor() {
    this.reducers = {
      [appName]: appReducer,
      [chooseNumber]: chooseNumberReducer
    }; // register your default reducers here
  }

  getReducers() {
    return { ...this.reducers };
  }

  register(name, reducer) {
    this.reducers = { ...this.reducers, [name]: reducer };
  }
}

const reducerRegistry = new ReducerRegistry();

export default reducerRegistry;
