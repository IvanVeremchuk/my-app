import './App.css';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Profile from './components/Profile/Profile.jsx'
import Dialogs from './components/Dialogs/Dialogs.jsx'; 
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {

  let posts = [
    {id: 1, message: 'Hi, how are you', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11},
    {id: 3, message: 'Yo', likesCount: 11},
    {id: 4, message: 'Yo', likesCount: 11},
    {id: 5, message: 'Yo', likesCount: 11},
    {id: 6, message: 'Yo', likesCount: 11},
]

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
          <div  className="s.app-wrapper-content">
            <Route exact path="/dialogs" render={ () => <Dialogs dialogs={props.dialogs} messages ={props.messages}/> }/>
            <Route exact path="/profile" render={ () => <Profile posts={props.posts}/> }/>
            <Route exact path="/news" render={ () => <News/> }/>
            <Route exact path="/music" render={ () => <Music/> }/>
            <Route exact path="/settings" render={ () => <Settings/> }/>>
          </div>
      </div>
     </BrowserRouter>
  );
}

export default App;