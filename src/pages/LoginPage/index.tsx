import { Center } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/Auth";
import { Container, Button, Label, Input, Container2 } from "./stlyle";

function LoginPage() {
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
                    <Label  htmlFor="email"><b>Username</b></Label>
                    <br />
                    <Input ref={emailRef} type="email" placeholder="Enter email" name="email" required/>
                    <br/>
                    <br />
                    <Label htmlFor="psw"><b>Password</b></Label>
                    <br />
                    <Input ref={passwordRef} type="password" placeholder="Enter Password" name="psw" required/>
                    <br />
                    <br />
                    <Container2>
                        <Button>Login</Button>
                    </Container2>
                </form>
            </Container>
        :
        <Center><Spinner/></Center>
    );
}

export default LoginPage;