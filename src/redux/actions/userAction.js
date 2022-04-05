const UPDATE_NAME='UPDATE_NAME'
const UPDATE_DEPT='UPDATE_DEPT'

export const updateName=(name)=>{

    return ({
        type: UPDATE_NAME,
        payload:name
    });

}

export const updateDept=(dept)=>{
    return ({
        type: UPDATE_DEPT,
        payload:dept
    });
}
