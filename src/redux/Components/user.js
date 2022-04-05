import react from 'react';
import {connect} from 'react-redux'
import {updateName} from '../actions/userAction'
import {getUserDetails} from '../actions/userAction'

function User(props){

    const changeUserName=()=>{
        props.changeName('Rashi Goyal')
    }
    const showDetails=()=>{
        console.log(props.getUserDetails)
    }
    return(
        <div>
            <p>Welcome to the world of React</p>
            {props.user.name}
            <p><button onClick={changeUserName}>Change Name</button></p>
            <p><button onClick={showDetails}>Show Details</button></p>
        </div>
    );

}

const mapStateToProps = (state)=>{
    console.log(state)
    return state
}
const mapDispatchToProps = (dispatch)=>{

    return {
        changeName:(name)=>{ dispatch(updateName(name))},
        showDetails:()=>{dispatch(getUserDetails())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(User);