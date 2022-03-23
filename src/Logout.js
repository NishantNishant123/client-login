import React from 'react'
import Axios from 'axios';
import { useSelector, useDispatch } from "react-redux";

const Logout = () => {
  const dispatch=useDispatch();
  // const loginid = useSelector(state => {
  // // return  state.LoginReducer = state.LoginReducer[
  // //     state.LoginReducer.length - 1]
  // // });

  const loginid = useSelector(state => {
    return  state.LoginReducer;
    
    });
  console.log("login idididididid" + loginid);

  Axios.get("http://localhost:3001/delete", {
    params: {
      id: loginid[loginid.length-1],
    }
  }


  ).then((response) => {
    
    dispatch({type:'DELETEDID'});
    
    
    console.log(response);


  })
  return (
    <div>Logout</div>
  )
}

export default Logout