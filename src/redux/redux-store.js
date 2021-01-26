import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import friendReducer from "./friend-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    friendPage: friendReducer,
    usersPage: usersReducer
});
let store = createStore(reducers);

export default store