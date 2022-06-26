import { Box, Button, Divider, Flex, FormControl, FormErrorMessage, Icon, Input, InputGroup, InputLeftElement, Link, Stack, Text, useToast } from "@chakra-ui/react"

import { AiOutlineMail } from 'react-icons/ai'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from "../../services/api";
import { setCookie } from "nookies";
import { RiLock2Fill } from "react-icons/ri";


const schema = yup.object({
    email: yup.string().required('Por favor, inserir um valor.').email('Inserir um e-mail válido.'),
    password: yup.string().required('Por favor, inserir um valor.'),
});


const LoginPage = () => {

    const { register, handleSubmit, formState:{ errors, isSubmitting }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const toast = useToast()
    
    const onSubmit = handleSubmit((data) => { 
        return new Promise((resolve, reject) => {
            api.post('/accounts/admin', data).then(response => {
                resolve(response);
                if(response.status == 200){
                    if(response.data.token){
                        const { token } = response.data;
                        setCookie(null, 'artec.token', token)
                        window.location.reload();
    
                    }
                } else {
                    toast({
                        title: `Error na criação do usuário`,
                        status: 'error',
                        isClosable: true,
                      })
                }
            }).catch(error => {
                if(error.response.status == 400){
                    toast({
                        title: `${error.response.data.message}`,
                        status: 'error',
                        isClosable: true,
                      })
                }
                reject()
                
            })
        })
        /* await api.post('/accounts/admin', data).then(response => {
            console.log(response)
            if(response.status == 200){
                if(response.data.token){
                    navigate('/courses');

                }
            } else {
                toast({
                    title: `Error na criação do usuário`,
                    status: 'error',
                    isClosable: true,
                  })
            }
        }).catch(error => {
            if(error.response.status == 400){
                toast({
                    title: `${error.response.data.message}`,
                    status: 'error',
                    isClosable: true,
                  })
            }
            
        }) */
    });

    return (
        <Flex
            h="100vh"
            flexDirection="column"
        >
            <Flex 
                w="100%" 
                h="100%"
                maxW="480px"
                margin="auto"
                flexDirection="column" 
                justify="center"
                
            >
                <Box bgColor="gray.50" borderRadius="14" p="4" borderWidth={1} borderColor="gray.300">
                    <Text align="center" fontWeight="bold" fontSize="2xl" mt="2">Bem-vindo!</Text>
                    <Text align="center" fontSize="md" mt="2">Faça login com sua conta.</Text>
                    <Stack spacing="4" as="form" py="8" px={["4", "8"]} onSubmit={onSubmit}>
                        <FormControl alignItems="center" isInvalid={errors.email}>
                            <InputGroup display="flex" flexDirection="column">
                            <InputLeftElement
                                pointerEvents='none'
                                children={<Icon as={AiOutlineMail} color="gray.400"/>}
                                />
                                <Input placeholder="Email" id='user' type='user' variant="flushed" bgColor="blue.50" fontFamily="body" borderColor="gray.500" borderWidth="2" bg="#FFF" {...register('email')}/>
                            {errors.email && (<FormErrorMessage color="red">{errors.email.message}</FormErrorMessage>)}
                            </InputGroup>
                        </FormControl>

                        <FormControl alignItems="center" isInvalid={errors.password}>
                        <InputGroup display="flex" flexDirection="column">
                            <InputLeftElement
                                pointerEvents='none'
                                children={<Icon as={RiLock2Fill} color="gray.400"/>}
                                />
                                <Input placeholder="Senha" id='password' type='password' variant="flushed" bgColor="blue.50" fontFamily="body" borderColor="gray.500" borderWidth="2" bg="#FFF" {...register('password')}/>
                                {errors.password && (<FormErrorMessage color="red">{errors.password.message}</FormErrorMessage>)}
                            </InputGroup>
                            
                        </FormControl>
                        <Flex w="100%" flexDirection="column">
                            <Button type="submit" fontFamily="body" colorScheme="facebook" color="white" isLoading={isSubmitting}>Login</Button>
                            <Link alignSelf="center" mt="3" fontSize="sm">Esqueci minha senha.</Link>
                        </Flex>
                        <Divider />
                        <Text align="center"> Ou fazer login com</Text>
                        <Flex justify="center">
                            <Button fontFamily="body" colorScheme="red" color="white">Google</Button>
                        </Flex>
                        
                    </Stack>
                   

                </Box>
                
                


            </Flex>
            

        </Flex>

    )
}

export { LoginPage }