import { Center } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/Auth";
import { Container, Button, Label, Input, Container2 } from "./styles";

function CadastroPage() {
    
    const nameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    const { signIn, isUserDataPresent } = useAuth();
    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (emailRef.current?.value !== undefined && passwordRef.current?.value !== undefined) {
            signIn('email_and_password', {
                email: emailRef.current?.value,
                password: passwordRef.current?.value,
            }).then(() => {
                navigate('/');
            });
        }
    }
    
    return (
        isUserDataPresent ? 
            <Container>
                <form onSubmit={handleOnSubmit} className="principal2">
                    <Label  htmlFor="name"><b>Nome</b></Label>
                    <br />
                    <Input ref={nameRef} type="name" placeholder="Insira seu nome" name="name" required/>
                    <br/>
                    <br />
                    <Label  htmlFor="email"><b>E-mail</b></Label>
                    <br />
                    <Input ref={emailRef} type="email" placeholder="Insira seu email" name="email" required/>
                    <br/>
                    <br />
                    <Label htmlFor="psw"><b>Password</b></Label>
                    <br />
                    <Input ref={passwordRef} type="password" placeholder="Insira a senha" name="psw" required/>
                    <br />
                    <br />
                    <Container2>
                        <Button>Cadastre-se</Button>
                    </Container2>
                </form>
            </Container>
        :
        <Center><Spinner/></Center>
    );
}

export default CadastroPage;