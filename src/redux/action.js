import {ERROR, LOAD_USERS} from "./actionTypes";


export const loadUsersAction = (data) =>({
    type: LOAD_USERS,
    payload: data
})
export const loadAction = () =>({
    type: LOAD_USERS,

})
export const ErrorAction = (error) =>({
    type: ERROR,
    payload: error
})
