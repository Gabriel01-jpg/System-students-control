import { Box, Button, Flex, FormControl, FormLabel, Input, Link, Stack } from "@chakra-ui/react"

const Login = () => {
    return (
        <Flex
            h="calc(100vh - 230px)"
        >
            <Flex 
                w="100%" 
                maxW="480px"
                margin="auto"
                bgColor="#D3D3D3" 
                flexDirection="column" 
                borderRadius="12"
            >
                <Stack spacing="6" as="form" py="12" px="8">
                    <FormControl display="flex" alignItems="center">
                        <FormLabel htmlFor='user' fontSize="lg" fontFamily="body">Usuário: </FormLabel>
                        <Input id='user' type='user' fontFamily="body" borderColor="gray.500" borderWidth="2"/>
                    </FormControl>

                    <FormControl display="flex" alignItems="center">
                        <FormLabel htmlFor='password' fontSize="lg" fontFamily="body">Senha: </FormLabel>
                        <Input id='password' type='password' fontFamily="body" borderColor="gray.500" borderWidth="2"/>
                    </FormControl>
                    <Box alignSelf="flex-end">
                        <Button type="submit" fontFamily="body" bg="#FFA500" color="white">ENTRAR</Button>
                    </Box>
                    
                </Stack>
                <Link>Esqueci minha senha.</Link>

            </Flex>

        </Flex>

    )
}

export { Login }