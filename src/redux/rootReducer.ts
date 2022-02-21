import { combineReducers } from "redux";
import { answerReducer } from "./answer/answerReducer";

const rootReducer = combineReducers({
  answerReducer: answerReducer.reduce,
});

export default rootReducer;
