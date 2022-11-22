import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../contexts/user.context";
import BeatLoader from "react-spinners/BeatLoader";

function NewExitScreen() {
    const navigate = useNavigate();

    const { loggedUser } = useContext(UserContext);

    const [exit, setExit] = useState({
        type: "exit",
        value: "",
        description: "",
    });

    const [disabled, setDisabled] = useState(false);

    function clearInputs() {
        setExit({
            value: "",
            description: "",
        });
    }

    function submitForm(e) {
        e.preventDefault();

        setDisabled(true);

        const config = {
            headers: {
                Authorization: "Bearer " + loggedUser.token,
            },
        };

        axios
            .post("http://localhost:5000/transactions", exit, config)
            .then((ans) => {
                alert(
                    loggedUser.username +
                        ", Sua saída foi cadastrada com sucesso!"
                );
                navigate("/home");
            })
            .catch((err) => {
                alert(
                    loggedUser.username +
                        "Erro ao cadastrar sua saída! Tente novamente."
                );
                clearInputs();
                setDisabled(false);
            });
    }

    return (
        <Screen>
            <Title>Nova saída</Title>
            <Form onSubmit={submitForm}>
                <Input
                    name="value"
                    type="number"
                    placeholder="Valor"
                    value={exit.value}
                    onChange={(e) =>
                        setExit({ ...exit, value: e.target.value })
                    }
                    disabled={disabled}
                    required
                />
                <Input
                    name="description"
                    type="text"
                    placeholder="Descrição"
                    value={exit.description}
                    onChange={(e) =>
                        setExit({ ...exit, description: e.target.value })
                    }
                    disabled={disabled}
                    required
                />
                <Button>
                    {disabled ? <BeatLoader color="#FFFFFF" /> : "Salvar saída"}
                </Button>
            </Form>
            <Link to="/home">
                <ion-icon name="exit-outline"></ion-icon>
            </Link>
        </Screen>
    );
}

const Screen = styled.div`
    width: 100%;
    height: 100vh;
    padding: 25px 0;

    display: flex;
    flex-direction: column;
    align-items: space-between;

    a {
        text-decoration: none;
        color: inherit;
    }

    ion-icon {
        display: flex;
        position: fixed;
        bottom: 20px;
        right: 35px;
        font-size: 40px;
    }
`;

const Title = styled.h1`
    margin-bottom: 30px;

    font-size: 26px;
    font-weight: 700;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    width: 326px;
    height: 58px;
    margin-bottom: 15px;
    padding-left: 15px;

    font-size: 20px;

    outline: none;

    border: none;
    border-radius: 5px;

    ::placeholder {
        font-size: 20px;
        font-weight: 400;
    }
`;

const Button = styled.button`
    width: 326px;
    height: 46px;

    font-size: 20px;
    font-weight: 700;
    color: #ffffff;

    background-color: #a328d6;
    border: none;
    border-radius: 5px;

    cursor: pointer;
`;

export default NewExitScreen;
