import React from 'react';
import MainStyle from "./App.module.css";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom/cjs/react-router-dom.min';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className={MainStyle.wrapper}>
                <Header/>
                <Navbar/>
                <div className={MainStyle.content}>
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/users' component={Users}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
