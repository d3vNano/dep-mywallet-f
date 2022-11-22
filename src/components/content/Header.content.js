import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/user.context";

function HeaderContent() {
    const navigate = useNavigate();
    const { loggedUser } = useContext(UserContext);

    const config = {
        headers: {
            Authorization: "Bearer " + loggedUser.token,
        },
    };

    function endSession() {
        axios.delete("http://localhost:5000/session", config).then((ans) => {
            alert(ans.data);
            navigate("/");
        });
    }

    return (
        <Content>
            <Title>Olá, {loggedUser.username}</Title>

            <ion-icon
                name="exit-outline"
                onClick={() => {
                    endSession();
                }}
            ></ion-icon>
        </Content>
    );
}

const Content = styled.div`
    width: 100%;
    height: 80px;
    margin-bottom: 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    ion-icon {
        font-size: 40px;
    }
`;

const Title = styled.h1`
    font-size: 36px;
    font-weight: 700;
`;

export default HeaderContent;
