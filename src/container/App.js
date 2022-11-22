import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../components/contexts/user.context";

import ResetStyle from "../assets/css/reset.styles";
import GlobalStyle from "../assets/css/global.styles";

import SignInScreen from "../components/screens/SignIn.screen";
import SignUpScreen from "../components/screens/SignUp.screen";
import HomeScreen from "../components/screens/Home.screen";
import NewEntryScreen from "../components/screens/NewEntry.screen";
import NewExitScreen from "../components/screens/NewExit.screen";

function App() {
    const [loggedUser, setLoggedUser] = useState(
        JSON.parse(window.localStorage.getItem("user")) || {}
    );

    return (
        <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
            <ResetStyle />
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignInScreen />} />
                    <Route path="/sign-up" element={<SignUpScreen />} />
                    <Route path="/home" element={<HomeScreen />} />
                    <Route path="/new-entry" element={<NewEntryScreen />} />
                    <Route path="/new-exit" element={<NewExitScreen />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
