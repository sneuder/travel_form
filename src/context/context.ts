import { createContext} from "react";
import state from './state';

const Context = createContext({
  globalState: state,
  setGlobalState: {}
});
export default Context;