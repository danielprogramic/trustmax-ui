import Image from 'next/image';
import {Center, Divider, Flex, Text, VStack} from "@chakra-ui/react";
import rafiki from '/public/images/rafiki.svg';
import Logo from "components/Logo";
import useWindowSize from "hooks/useWindowSize";
import FormLogin from "components/FormLogin";

export default function LoginPage() {

    const { width } = useWindowSize();

    return (
        <Flex h="100vh">
            {
                width > 1024 &&
                <Center flex={1} bgColor="primary">
                    <Flex width="100%" justifyContent="center" align="center" flexDirection="column">
                        <Image src={rafiki} alt="Rafiki" />
                        <Text color="text.secondary" maxWidth="sm" marginTop="6rem" p={2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            At proin purus sit tempus auctor. Tellus, adipiscing magna sociis gravida ultricies.
                            Eget scelerisque quis sagittis, morbi volutpat et cras nisl.
                        </Text>
                    </Flex>
                </Center>
            }
            <Flex flex={2} flexDirection="column" bgColor="bgColor">
                <Center flex={15} flexDirection="column" w="full">
                    <Logo lighter="DOT" bolder="MX" size="100px"/>
                    <FormLogin />
                </Center>
                <VStack flex={1} alignItems="flex-end" px={8}>
                    <Divider />
                    <Text>DOTMX 2021 © - Versão [1.0]</Text>
                </VStack>
            </Flex>
        </Flex>
    )
};
