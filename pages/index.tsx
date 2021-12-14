import React, { useState } from "react";
import Image from "next/image";
import {
  Center,
  Flex,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  Button,
  VStack,
  Divider,
  Link,
} from "@chakra-ui/react";
import rafiki from "/public/images/rafiki.svg";
import Logo from "components/Logo";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import useWindowSize from "hooks/useWindowSize";

export default function LoginPage() {
  const { width } = useWindowSize();
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <Flex h="100vh">
      {width > 1024 && (
        <Center flex={1} bgColor="primary">
          <Flex
            width="100%"
            justifyContent="center"
            align="center"
            flexDirection="column"
          >
            <Image src={rafiki} alt="Rafiki" />
            <Text color="text.secondary" maxWidth="sm" marginTop="6rem" p={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At proin
              purus sit tempus auctor. Tellus, adipiscing magna sociis gravida
              ultricies. Eget scelerisque quis sagittis, morbi volutpat et cras
              nisl.
            </Text>
          </Flex>
        </Center>
      )}
      <Flex flex={2} flexDirection="column" bgColor="bgColor">
        <Center flex={15} flexDirection="column" w="full">
          <Logo lighter="DOT" bolder="MX" size="100px" />
          <form>
            <Stack spacing={4}>
              <Input type="email" placeholder="Digite seu e-mail" size="lg" />
              <InputGroup size="lg">
                <Input
                  type={passwordShown ? "text" : "password"}
                  placeholder="Digite sua senha"
                />
                <InputRightElement>
                  <IconButton
                    onClick={togglePasswordVisiblity}
                    _hover={{ bg: "transparent" }}
                    bg="transparent"
                    color="primary"
                    size="lg"
                    aria-label="toggle-password"
                  >
                    {passwordShown ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </IconButton>
                </InputRightElement>
              </InputGroup>
              <Link>Esqueceu a senha?</Link>
              <br />
              <Stack spacing={4}>
                {/*change to submit when will implement*/}
                <Button type="button">Acessar o sistema</Button>
              </Stack>
              <Text>
                Nao possui conta? <Link>Registre-se.</Link>
              </Text>
            </Stack>
          </form>
        </Center>
        <VStack flex={1} alignItems="flex-end" px={8}>
          <Divider />
          <Text>DOTMX 2021 © - Versão [1.0]</Text>
        </VStack>
      </Flex>
    </Flex>
  );
}
