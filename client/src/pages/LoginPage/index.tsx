import { Box, Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Link, Stack, useToast } from "@chakra-ui/react"

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from "../../services/api";
import { setCookie } from "nookies";


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
                <Stack spacing="6" as="form" py="12" px={["8", "6"]} bgColor="#D3D3D3" borderRadius="14" onSubmit={onSubmit}>
                    <FormControl alignItems="center" isInvalid={errors.email}>
                        <FormLabel htmlFor='user' fontSize="lg" fontFamily="body">Usuário: </FormLabel>
                        <Input id='user' type='user' fontFamily="body" borderColor="gray.500" borderWidth="2" bg="#FFF" {...register('email')}/>
                        {errors.email && (<FormErrorMessage color="red">{errors.email.message}</FormErrorMessage>)}
                    </FormControl>

                    <FormControl alignItems="center" isInvalid={errors.password}>
                        <FormLabel htmlFor='password' fontSize="lg" fontFamily="body">Senha: </FormLabel>
                        <Input id='password' type='password' fontFamily="body" borderColor="gray.500" borderWidth="2" bg="#FFF" {...register('password')}/>
                        {errors.password && (<FormErrorMessage color="red">{errors.password.message}</FormErrorMessage>)}
                    </FormControl>
                    <Box alignSelf="flex-end">
                        <Button type="submit" fontFamily="body" bg="#FFA500" color="white" isLoading={isSubmitting}>ENTRAR</Button>
                    </Box>
                    
                </Stack>
                <Link alignSelf="center" mt="4">Esqueci minha senha.</Link>
                


            </Flex>
            

        </Flex>

    )
}

export { LoginPage }