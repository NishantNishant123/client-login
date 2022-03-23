import React from 'react'
import { useLocation } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import Axios from 'axios';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
const SecretPage = () => {
  const [imagedisplay, setimagedisplay] = useState(true);
  const [image, setImage] = useState("");
  //const location = useLocation();

  const loginid = useSelector(state => {
    return state.LoginReducer;

  });


  useEffect(() => {
    if (loginid !== null) {
      setimagedisplay(true);
    }
    else
      setimagedisplay(false);
  }, []);
  

  console.log(loginid);
  //const searchParams = new URLSearchParams(location.search);
  


  Axios.get("http://localhost:3001/secret", {
    params: {
      id: loginid[loginid.length - 1],
    }
  }


  ).then((response) => {

    setImage(response.data[0].image)


  }).catch((error) => {
    console.log("we have catch secret page error without id");
  })


  



  return (
    <div>SecretPage<form>

      {imagedisplay ?
        <img alt="" src={image} style={{ width: "500px", height: "500px" }} /> : "Please Login"

      }
    </form>
    </div>
  )
}

export default SecretPage