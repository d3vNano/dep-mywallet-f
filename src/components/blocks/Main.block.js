import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../contexts/user.context";
import Entries from "./Entries.block";
import Exities from "./Exities.block";

function MainBlock({ transactions }) {
    let entries = 0;
    let exities = 0;

    transactions.forEach((element) => {
        element.type === "entry"
            ? (entries += Number(element.value))
            : (exities += Number(element.value));
    });

    let total = entries - exities;

    return (
        <Screen>
            <List>
                {transactions
                    .map((trans, index) =>
                        trans.type === "entry" ? (
                            <Entries
                                key={index}
                                type={trans.type}
                                date={trans.date}
                                value={trans.value}
                                description={trans.description}
                            />
                        ) : (
                            <Exities
                                key={index}
                                type={trans.type}
                                date={trans.date}
                                value={trans.value}
                                description={trans.description}
                            />
                        )
                    )
                    .reverse()}
            </List>
            <Total>
                <Title>SALDO</Title>
                <Value total={total}>{"R$ " + total}</Value>
            </Total>
        </Screen>
    );
}

const Screen = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const List = styled.div`
    width: 100%;
`;

const Total = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
`;

const Title = styled.h1`
    font-size: 18px;
    font-weight: 700;

    color: #000000;
`;

const Value = styled.p`
    font-size: 18px;
    font-weight: 700;
    color: ${({ total }) => (total < 0 ? "red" : "green")};
`;

export default MainBlock;
