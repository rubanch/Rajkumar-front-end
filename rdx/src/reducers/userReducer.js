import { SET_USER_DETAILS } from "../actions/userAction";

const initialState = {
    firstName: '',
    lastName: '',
    gender: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DETAILS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default userReducer;
