import LoginReducer from "./LoginReducer";

import { combineReducers } from "redux";

const reducers = combineReducers(
    {
    //   myNumber:changeTheNumber
        LoginReducer
    }
);

export default reducers;