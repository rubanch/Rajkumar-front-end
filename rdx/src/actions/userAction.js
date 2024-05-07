// Action Types
export const SET_USER_DETAILS = 'SET_USER_DETAILS';

// Action Creators
export const setUserDetails = userDetails => ({
    type: SET_USER_DETAILS,
    payload: userDetails
});
