import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

function SignUpScreen() {
    const navigate = useNavigate();

    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [disabled, setDisabled] = useState(false);

    function clearInputs() {
        setNewUser({
            name: "",
            email: "",
            password: "",
        });
    }

    function submitForm(e) {
        e.preventDefault();

        setDisabled(true);

        axios
            .post("http://localhost:5000/sign-up", newUser)
            .then((ans) => {
                alert("Cadastro concluído! Agora faça o login.");
                navigate("/");
            })
            .catch((err) => {
                alert("Fala no cadastro! Tente novamente");
                clearInputs();
                setDisabled(false);
            });
    }

    return (
        <Screen>
            <Title>MyWallet</Title>
            <Form onSubmit={submitForm}>
                <Input
                    name="nome"
                    type="text"
                    placeholder="Nome"
                    value={newUser.name}
                    onChange={(e) =>
                        setNewUser({ ...newUser, name: e.target.value })
                    }
                    disabled={disabled}
                    required
                />
                <Input
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    value={newUser.email}
                    onChange={(e) =>
                        setNewUser({ ...newUser, email: e.target.value })
                    }
                    disabled={disabled}
                    required
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Senha"
                    value={newUser.password}
                    onChange={(e) =>
                        setNewUser({
                            ...newUser,
                            password: e.target.value,
                        })
                    }
                    disabled={disabled}
                    required
                />
                {/* <Input
                    name="passwordConfirm"
                    type="password"
                    placeholder="Confirme a senha"
                    value={newUser.passwordConfirm}
                    onChange={(e) =>
                        setNewUser({
                            ...newUser,
                            passwordConfirm: e.target.value,
                        })
                    }
                    disabled={disabled}
                    required
                /> */}
                <Button disabled={disabled}>
                    {disabled ? <BeatLoader color="#FFFFFF" /> : "Cadastrar"}
                </Button>
            </Form>
            <Link to="/">
                <SignIn>
                    Já tem uma conta? <strong>Entre agora!</strong>
                </SignIn>
            </Link>
        </Screen>
    );
}

const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
        text-decoration: none;
        color: inherit;
    }
`;

const Title = styled.h1`
    margin-bottom: 30px;

    font-family: "Saira Stencil One", cursive;
    font-size: 32px;
    font-weight: 400;
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

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    text-align: center;

    background-color: #a328d6;
    border: none;
    border-radius: 5px;

    cursor: pointer;
`;

const SignIn = styled.p`
    margin-top: 35px;

    strong {
        font-style: italic;
        text-decoration: underline;
    }
`;

export default SignUpScreen;
