import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Contact from "./components/Contact/Contact";
import {BrowserRouter, Route} from "react-router-dom"
import Friend from "./components/Friend/Friend";

const App = (props) => {


    return (
        <div className='app-wrapper'>
            <BrowserRouter>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>


                    <Route path = '/dialogs' render={ () => <Dialogs dialogsData = {props.appstate.messagePage.dialogsData} messageData = {props.appstate.messagePage.messageData}/>}/>
                    <Route path = '/profile' render={ () => <Profile posts = {props.appstate.profilePage.messagePost}/>}/>
                    <Route path = '/news' render={ () => <News/>}/>
                    <Route path = '/contact' render={ () => <Contact/>}/>

                </div>
                <Friend friends = {props.appstate.friendPage.friends}/>
            </BrowserRouter>
        </div>
);
}


export default App;
