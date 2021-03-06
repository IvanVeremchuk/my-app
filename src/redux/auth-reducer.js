import { authAPI } from "../api/api";

//all rules aktions how to change state
const SET_USER_DATA = 'FOLLOW';

let initialState = {    //can change data that is mutated - component's state. can't change - component's props
    usersId: null,
    email: null,
    login: null,
    isAuth: false
};

        //reducer - function that recaive state and action
const authReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_USER_DATA:
            return { 
                ...state,      
                ...action.data,
                isAuth: true
            }

            default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA,  data: {userId, email, login} })   //follow Action Creator
export const getAuthUserData = () => (dispatch)  => {
    authAPI.me()
    .then(response => {
      if (response.data.resultCode === 0) {
          let {id,  login, email } = response.data.data;
          dispatch(setAuthUserData(id, email, login));
      }
    });
}
export default authReducer;
