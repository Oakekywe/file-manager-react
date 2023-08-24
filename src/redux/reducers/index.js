import { combineReducers } from "redux";
import authReducer from "./authReducer";
import filesFoldersReducer from "./filesFoldersReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  filefolders: filesFoldersReducer,
});
export default rootReducer;
 