import React from 'react';
import MainStyle from "./App.module.css";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom/cjs/react-router-dom.min';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";



const App = () => {
    return (
        <BrowserRouter>
            <div className={MainStyle.wrapper}>
                <Header/>
                <Navbar/>
                <div className={MainStyle.content}>
                    <Route path='/profile/:userID?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/users' component={UsersContainer}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
