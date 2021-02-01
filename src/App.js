import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Contact from "./components/Contact/Contact";
import {Route} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {

    return (
        <div className='app-wrapper'>

                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>


                    <Route path = '/dialogs' render={ () => <DialogsContainer  />}/>
                    <Route path = '/profile/:userId?' render={ () => <ProfileContainer />}/>
                    <Route path = '/users' render={ () => <UsersContainer />}/>
                    <Route path = '/news' render={ () => <News/>}/>
                    <Route path = '/contact' render={ () => <Contact/>}/>

                </div>



        </div>
);
}


export default App;
