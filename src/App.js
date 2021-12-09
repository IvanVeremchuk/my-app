import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import {Route} from 'react-router-dom';
import LoginPage from './components/Login/Login';

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
        <div  className="app-wrapper-content">
            <Route path="/dialogs"                                  //ROUTE(tracking url: Object props/callback/buttons/etc)
                render={ () => <DialogsContainer /> }/>
            <Route path="/profile/:userId?" 
                render={ () => <ProfileContainer /> }/>
            <Route path="/users" 
                render={ () => <UsersContainer /> }/>
            <Route path="/news" 
                render={ () => <News/> }/>
            <Route path="/music" 
                render={ () => <Music/> }/>
            <Route path="/settings" 
                render={ () => <Settings/> }/>
            <Route path="/login"
                render={ () => <LoginPage /> }/>
            </div>
        </div>
    )
}

export default App; 