import { combineReducers } from "redux";
/* import darkModeReducer from "./darkMode"; */
import langReducer from "./lang";

const rootReducer = combineReducers({
  /* darkMode: darkModeReducer, */
  lang: langReducer,
});

export { rootReducer };
