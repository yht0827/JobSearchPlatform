import { combineReducers } from "redux";
import auth from "Store/modules/auth";
import qnet from "Store/modules/qnet";
import ybm from "Store/modules/ybm";
import company from "Store/modules/company";

const rootReducer = combineReducers({
 auth,
 qnet,
 ybm,
 company,
});

export default rootReducer;
