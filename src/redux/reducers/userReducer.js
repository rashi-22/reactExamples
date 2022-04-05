const userInitial={
    empno:1,
    name:'Rashi',
    email: 'rashi@gmail.com',
    department:['IT','Management']
}

const userReducer=(state=userInitial,action)=>{

    switch(action.type) {
        case 'UPDATE_NAME' :{
            return {
                ...state,
                name:action.payload
            }
        }
        case 'USER_DETAILS':{
            return {
                ...state
            }
        }
        default:
            return state
    }

}

export default userReducer