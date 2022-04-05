const userInitial={
    empno:1,
    name:'Rashi',
    email: 'rashi@gmail.com',
    department:'IT'
}

const userReducer=(state=userInitial,action)=>{

    switch(action.type) {
        case 'UPDATE_NAME' :{
            return {
                ...state,
                name:action.payload
            }
        }
        case 'UPDATE_DEPT':{
            return {
                ...state,
                department:action.payload
            }
        }
        default:
            return state
    }

}

export default userReducer