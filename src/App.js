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


                    <Route path = '/dialogs' render={ () => <Dialogs store = {props.store} />}/>
                    <Route path = '/profile' render={ () => <Profile posts = {props.appstate.profilePage.messagePost} dispatch = {props.dispatch}  new = {props.appstate.profilePage.newPostText}/>}/>

                    <Route path = '/news' render={ () => <News/>}/>
                    <Route path = '/contact' render={ () => <Contact/>}/>

                </div>

                <Friend friends1 = {props.appstate.friendPage}/>
            </BrowserRouter>
        </div>
);
}


export default App;
