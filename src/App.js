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
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";

const App = (props) => {

    return (
        <div className='app-wrapper'>

                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>


                    <Route path = '/dialogs' render={ () => <DialogsContainer  />}/>
                    <Route path = '/profile' render={ () => <Profile />}/>
                    <Route path = '/users' render={ () => <Users />}/>
                    <Route path = '/news' render={ () => <News/>}/>
                    <Route path = '/contact' render={ () => <Contact/>}/>

                </div>



        </div>
);
}


export default App;
