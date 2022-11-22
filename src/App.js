import './App.css';
import Header from './components/Header/Header'
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs"
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import store from "./Redux/Store";
import  Funspace from './components/Funspace/Funspace'

const App = (props) => {
  return (
      <div className={"app-wrapper"}>
          <Header/>
          <Nav/>
          <div className={"app-wrapper-content"}>
              <Routes>
                  <Route path="/profile"
                         element={<Profile profilePage={props.state.profilePage}
                                           dispatch={props.state.dispatch.bind(store)}/>}/>
                  <Route path="/dialogs/*"
                         element={<Dialogs dialogPage={props.state.dialogPage}
                                           dispatch={props.state.dispatch.bind(store)} />}/>
                  <Route path="/news" element={<News/>}/>
                  <Route path="/settings" element={<Settings/>}/>
                  <Route path="/music" element={<Music/>}/>
                  <Route path="/funspace"
                         element={<Funspace funspacePage={props.state.funspacePage} dispatch={props.state.dispatch.bind(store)}/>}/>
              </Routes>
          </div>
      </div>
  )
}

export default App;
