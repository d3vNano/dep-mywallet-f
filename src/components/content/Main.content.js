import axios from "axios";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";

import UserContext from "../contexts/user.context";

import MainBlock from "../blocks/Main.block";

function MainContent() {
    const { loggedUser } = useContext(UserContext);

    const [transactions, setTransactions] = useState([]);

    const config = {
        headers: {
            Authorization: "Bearer " + loggedUser.token,
        },
    };

    useEffect(() => {
        axios.get("http://localhost:5000/home", config).then((ans) => {
            setTransactions(ans.data);
        });
    }, []);

    return (
        <Content>
            {transactions.length !== 0 ? (
                <MainBlock transactions={transactions} />
            ) : (
                <NoContent>Não há registros de entrada ou saída</NoContent>
            )}
        </Content>
    );
}

const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 25px 15px 15px 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #ffffff;
    border-radius: 5px;

    color: #868686;
`;

const NoContent = styled.h1`
    width: 180px;

    font-size: 20px;
    font-weight: 400;
    line-height: 25px;

    text-align: center;
`;

export default MainContent;
