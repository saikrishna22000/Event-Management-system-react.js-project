import AuthReducer from './Authreducer';
import NavReducer from "./Navreducer";
import {combineReducers} from "redux";

export default combineReducers({
 Navreducer:NavReducer,
 AuthReducer:AuthReducer

})