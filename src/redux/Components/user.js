import react,{useEffect,useState} from 'react';
import {connect} from 'react-redux'
import {updateName} from '../actions/userAction'
import {updateDept} from '../actions/userAction'

function User(props){
    const [dept,setDept]=useState(props.user.department)
    const [name,setName]=useState(props.user.name)
    
    const changeUserName=()=>{
        props.changeName(name)
    }
    const updateDetails=()=>{
        props.updateDepartment(dept)
    }
    return(
        <div>
            <p>Welcome to the world of React</p>
            <p>{name}</p>
            <p><input placeholder='New name' onChange={(event)=>{setName(event.target.value)}}></input></p>
            <p><button onClick={changeUserName}>Change Name</button></p>
            <p>{dept}</p>
            <input onChange={(event)=>{setDept(event.target.value)}}></input>
            <p><button onClick={updateDetails}>Update Dept</button></p>
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
        updateDepartment:(dept)=>{dispatch(updateDept(dept))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(User);