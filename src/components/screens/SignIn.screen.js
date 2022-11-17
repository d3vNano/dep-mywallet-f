import { Link } from "react-router-dom";
import styled from "styled-components";

function SignInScreen() {
    return (
        <Screen>
            <Title>MyWallet</Title>
            <Form>
                <Input name="email" type="text" placeholder="E-mail" />
                <Input name="password" type="password" placeholder="Senha" />
                <Button>Entrar</Button>
            </Form>
            <Link to="/sign-up">
                <SignUp>
                    Primeira vez? <strong>Cadastre-se</strong>
                </SignUp>
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

    font-size: 20px;
    font-weight: 46px;
    color: #ffffff;

    background-color: #a328d6;
    border: none;
    border-radius: 5px;

    cursor: pointer;
`;

const SignUp = styled.p`
    margin-top: 35px;

    strong {
        font-style: italic;
        text-decoration: underline;
    }
`;

export default SignInScreen;
