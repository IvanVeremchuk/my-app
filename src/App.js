import './App.css';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Profile from './components/Profile/Profile.jsx'
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
          <div  className="s.app-wrapper-content">
            <Route exact path="/Profile" component={Profile}/>
            <Route exact path="/Dialogs" component={Dialogs}/>
            <Route exact path="/News" component={News}/>
            <Route exact path="/Music" component={Music}/>
            <Route exact path="/Settings" component={Settings}/>
          </div>
      </div>
     </BrowserRouter>
  );
}

export default App;
