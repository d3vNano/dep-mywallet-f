import styled from "styled-components";
import { Link } from "react-router-dom";

function SignUpScreen() {
    return (
        <Screen>
            <Title>MyWallet</Title>
            <Form>
                <Input name="nome" type="text" placeholder="Nome" />
                <Input name="email" type="email" placeholder="E-mail" />
                <Input name="password" type="password" placeholder="Senha" />
                <Input
                    name="passwordConfirm"
                    type="password"
                    placeholder="Confirme a senha"
                />
                <Button>Cadastrar</Button>
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
