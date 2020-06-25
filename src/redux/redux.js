import { createStore, combineReducers } from "redux";
import { characterReducer } from "./characterReducer";
import { monsterReducer } from "./monsterReducer";

let reducers = combineReducers({
  character: characterReducer,
  monster: monsterReducer,
});

let store = createStore(reducers);

export default store;
