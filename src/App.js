import './App.css';
import Header from './components/Header/Header'
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import  Funspace from './components/Funspace/Funspace'
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {

    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Nav/>
            <div className={"app-wrapper-content"}>
                <Routes>
                    <Route path="/profile"
                           element={<Profile/>}/>
                    <Route path="/dialogs/*"
                           element={<DialogsContainer/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/funspace"
                           element={<Funspace/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
