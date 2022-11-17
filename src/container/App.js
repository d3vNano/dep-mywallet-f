import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "../components/contexts/user.context";

import ResetStyle from "../assets/css/reset.styles";
import GlobalStyle from "../assets/css/global.styles";

import SignInScreen from "../components/screens/SignIn.screen";
import SignUpScreen from "../components/screens/SignUp.screen";

function App() {
    return (
        <UserContext.Provider>
            <ResetStyle />
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignInScreen />} />
                    <Route path="/sign-up" element={<SignUpScreen />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
