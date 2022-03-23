import "./App.css";
import { useState } from "react";
import Axios from "axios";
import Header from './Header'
import LoginForm from "./LoginForm";
import Register from "./Register";
import { Routes, Route } from 'react-router-dom';
import SecretPage from "./SecretPage";
import Logout from "./Logout";

function App() {
 return(<>

<div id="header"><Header/></div>

<Routes>
      <Route exact path="/" element={<>
          <LoginForm/></>} />
        <Route exact path="/register" element={<>
        
          <Register/></>} />
        <Route exact path="/login" element={<>
          <LoginForm/>
        </>} />
        <Route exact path="/secret" element={<>
          <SecretPage />
        </>} />
        <Route exact path="/delete" element={<>
          <Logout />
        </>} />
        {/* <Route exact path="/details/:productid" element={<div class="productdetail" style={{ justifyContent: 'center' }}><ProductDetail /></div>} /> */}
        
        
      </Routes>
 </>)
}

export default App;
