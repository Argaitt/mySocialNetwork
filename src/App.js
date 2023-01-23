import './App.css';
import Nav from "./components/Nav/Nav";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import  Funspace from './components/Funspace/Funspace'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {getAuthDataThunkCreator} from "./Redux/authReducer";

class App extends Component {
    componentDidMount() {
        this.props.getAuthDataThunkCreator()
    }
    render() {
        return (
            <div className={"app-wrapper"}>
                <HeaderContainer/>
                <Nav/>
                <div className={"app-wrapper-content"}>
                    <Routes>
                        <Route path='/login/' element={<Login/>}></Route>
                        <Route path="/profile/" element={<ProfileContainer/>}>
                            <Route path=":userid" element={<ProfileContainer/>}/>
                            <Route path="" element={<ProfileContainer/>}/>
                        </Route>
                        <Route path='/' element={<ProfileContainer/>}/>
                        <Route path="/dialogs/*"
                               element={<DialogsContainer/>}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/settings/*" element={<Settings/>}/>
                        <Route path="/music/*" element={<Music/>}/>
                        <Route path="/funspace/*"
                               element={<Funspace/>}/>
                        <Route path='/users/*' element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        )
    }
}

export default connect(null, {getAuthDataThunkCreator})(App);
