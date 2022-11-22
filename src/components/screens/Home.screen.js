import styled from "styled-components";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/user.context";

import HeaderContent from "../content/Header.content";
import MainContent from "../content/Main.content";
import FooterContent from "../content/Footer.content";

function HomeScreen() {
    return (
        <Screen>
            <HeaderContent />
            <MainContent />
            <FooterContent />
        </Screen>
    );
}

const Screen = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 15px 25px;

    display: flex;
    flex-direction: column;
`;

export default HomeScreen;
