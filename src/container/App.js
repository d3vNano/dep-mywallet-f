import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInScreen from "../components/screens/SignInScreen";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignInScreen />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
