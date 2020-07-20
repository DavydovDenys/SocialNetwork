import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";


function App(props) {

  let dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Ron'},
  ]

  let messagesData = [
    {id: 1, message: 'Hello!'},
    {id: 2, message: 'Yo!'},
  ]

  let dialogs = {dialogsData, messagesData}

  /*Profile Data*/
  let profileData = props.data.postElements

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/settings' component={Settings}/>
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile data={profileData} />}/>
          <Route path='/dialogs' render={() => <Dialogs data={dialogs}/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;

