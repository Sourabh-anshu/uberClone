import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from './pages/Start'
import Userlogin from "./pages/userLogin";
import UserSignup from "./pages/userSignup";
import CaptainLogin from "./pages/captainLogin";
import CaptainSignup from "./pages/captainSignup";
import Home from "./pages/home"
import UserProtectWrapper from "./pages/UserProtectWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";
import CaptainLogout from "./pages/CaptainLogout";
import Riding from "./pages/Riding";

const App = ()=>{
    return(
        <div>
            <Routes>
                <Route path='/' element = {<Start />} />
                <Route path='/login' element = {<Userlogin />} />
                <Route path='/signup' element = {<UserSignup />} />
                <Route path='/captain-login' element = {<CaptainLogin />} />
                <Route path='/captain-signup' element = {<CaptainSignup />} />
                <Route path="/home" element = {
                    <UserProtectWrapper>
                        <Home />
                    </UserProtectWrapper>
                }/>
                <Route path="/user/logout" element = {
                    <UserProtectWrapper>
                        <UserLogout />
                    </UserProtectWrapper>
                }/> 
                <Route path="/captain-home" element= {
                    <CaptainProtectWrapper>
                        <CaptainHome />
                    </CaptainProtectWrapper>
                }/>
                <Route path="/captain/logout" element = {
                    <CaptainProtectWrapper>
                        <CaptainLogout />
                    </CaptainProtectWrapper>
                }
                />
                <Route path="/riding" element={<Riding />} />
            </Routes>
        </div>
    )
}

export default App