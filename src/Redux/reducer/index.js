import { combineReducers } from "redux";
import { locationReducer } from "./locationReducer";

export const reducers = combineReducers({
    Locations: locationReducer
})