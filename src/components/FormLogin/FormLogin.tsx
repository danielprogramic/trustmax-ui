import {
    Button,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Link,
    Stack,
    Text,
    useBoolean
} from "@chakra-ui/react";
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
import {useState} from "react";
import useFormLogin from "components/FormLogin/useFormLogin";

type State = {
    username: string
    password: string
}

const initialState: State = { username: '', password: '' };

export default function FormLogin() {

    const [state, setState] = useState<State>(initialState);
    const [showPassword, {toggle}] = useBoolean(false);
    const authenticate = useFormLogin(state);

    const handleForm = (name: string, value: string) => {
        setState({ ...state, [name]: value })
    }

    const submit = (e) => {
        e.preventDefault();
        authenticate();
    }

    return (
        <form onSubmit={submit}>
            <Stack spacing={4}>
                <Input type="text" onChange={e => handleForm('username', e.target.value)}
                       placeholder="Nome de usuario" size="lg" />
                <InputGroup size="lg">
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        onChange={e => handleForm('password', e.target.value)}
                        placeholder='Senha'
                    />
                    <InputRightElement>
                        <IconButton
                            onClick={toggle}
                            _hover={{ bg: 'transparent' }}
                            bg="transparent"
                            color="primary"
                            size="lg" aria-label="toggle-password">
                            {
                                showPassword ?  <AiFillEye /> : <AiFillEyeInvisible />
                            }
                        </IconButton>
                    </InputRightElement>
                </InputGroup>
                <Link>Esqueceu a senha?</Link>
                <br/>
                <Stack spacing={4}>
                    <Button type="submit">Acessar o sistema</Button>
                </Stack>
                <Text>Nao possui conta? <Link>Registre-se.</Link></Text>
            </Stack>
        </form>
    )
}