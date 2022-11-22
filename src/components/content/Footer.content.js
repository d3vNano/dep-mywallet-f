import styled from "styled-components";
import { Link } from "react-router-dom";

function FooterContent() {
    return (
        <Content>
            <Link to="/new-entry">
                <NewEntry>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <Title>
                        Nova <br />
                        entrada
                    </Title>
                </NewEntry>
            </Link>
            <Link to="/new-exit">
                <NewExit>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <Title>
                        Nova <br />
                        saída
                    </Title>
                </NewExit>
            </Link>
        </Content>
    );
}

const Content = styled.div`
    width: 100%;
    height: 115px;
    margin-top: 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    ion-icon {
        font-size: 25px;
    }

    a {
        width: inherit;
        height: inherit;

        text-decoration: none;
        color: inherit;
    }
`;

const NewEntry = styled.div`
    width: 100%;
    height: 114px;
    margin-right: 5px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 5px;
    background-color: #a328d6;
`;

const NewExit = styled.div`
    width: 100%;
    height: 114px;
    margin-left: 5px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 5px;
    background-color: #a328d6;
`;

const Title = styled.h1`
    font-size: 17px;
    font-weight: 700;
`;

export default FooterContent;
