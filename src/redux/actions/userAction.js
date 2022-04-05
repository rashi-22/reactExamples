const UPDATE_NAME='UPDATE_NAME'
const USER_DETAILS='USER_DETAILS'

export const updateName=(name)=>{

    return ({
        type: UPDATE_NAME,
        payload:name
    });

}

export const getUserDetails=()=>{
    return ({
        type: USER_DETAILS
    });
}
