import { Link } from "react-router-dom";

import styled from "styled-components";

function Exities({ type, date, value, description }) {
    return (
        <Screen>
            <Exit>
                <LeftColumn>
                    <Date>{date}</Date>
                    <Link to="/update-exit">
                        <Desc>{description}</Desc>
                    </Link>
                </LeftColumn>
                <RightColumn>
                    <ExitValue>{"R$ " + value}</ExitValue>
                </RightColumn>
            </Exit>
        </Screen>
    );
}

const Screen = styled.div`
    width: 100%;
    margin-bottom: 15px;

    a {
        text-decoration: none;
    }
`;

const Exit = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`;

const LeftColumn = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const Date = styled.p`
    margin-right: 15px;
    font-size: 16px;
    font-weight: 400;
    color: #c6c6c6;
`;

const Desc = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #000000;
`;

const RightColumn = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const ExitValue = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #c70000;
`;

export default Exities;
