import {
    Box,
    Flex,
    Heading,
    Button,
    Divider,
    SimpleGrid,
    VStack,
    HStack,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    useToast

} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import { Header } from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from "react";
import { generateRandomPassword } from "../../utils/generateRandomPassword";

const schema = yup.object({
    name: yup.string().required('Por favor, inserir um valor.'),
    surname: yup.string().required('Por favor, inserir um valor.'),
    email: yup.string().required('Por favor, inserir um valor.').email('Inserir um e-mail válido.'),
    password: yup.string().required('Por favor, inserir um valor.'),
});
  
export default function UsersCreate() {


    const [ passwordValue, setPasswordValue ] = useState('');
    const { register, handleSubmit, formState:{ errors, isSubmitting}, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const toast = useToast()
    
    const onSubmit = handleSubmit(data => {
        
        api.post('/users', data).then(response => {
            if(response.status == 200){
                toast({
                    title: 'Usuário criado!',
                    description: "O usuário foi criado com sucesso.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
                reset()
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
            
        })
    });

    function handleSetPassword(){
        const password = generateRandomPassword(12)
        setPasswordValue(password);

    }

    return (
      <Box>
        <Header />
  
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={["4", "4,", "6"]}>
          <Sidebar />
          <Box flex="1" bg="gray.100" p={8} borderRadius={8} as="form" onSubmit={onSubmit}>
            <Flex mb="4" justify="space-between" align="center">
                <Heading size="lg" fontWeight="normal">
                    Cadastro de usuários
                </Heading>
            </Flex>
            <Divider my="4" borderColor="gray.400" />
            <VStack spacing="6" >
                <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                    <FormControl isInvalid={errors.name}>
                        <FormLabel htmlFor='course'>Nome: </FormLabel>
                        <Input id='name' type='text' variant="outline" bg="#FFF" {...register('name')}/>
                        {errors.name && (<FormErrorMessage color="red">{errors.name.message}</FormErrorMessage>)}
                    </FormControl>
                    <FormControl isInvalid={errors.surname}>
                        <FormLabel htmlFor='price'>Sobrenome: </FormLabel>
                        <Input id='surname' type='text' bg="#FFF" {...register('surname')}/>
                        {errors.surname && (<FormErrorMessage color="red">{errors.surname.message}</FormErrorMessage>)}
                    </FormControl>

                </SimpleGrid>
                <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                    <FormControl isInvalid={errors.email}>
                        <FormLabel htmlFor='course'>Email: </FormLabel>
                        <Input id='email' type='text' variant="outline" bg="#FFF" {...register('email')}/>
                        {errors.email && (<FormErrorMessage color="red">{errors.email.message}</FormErrorMessage>)}
                    </FormControl>
                    <FormControl isInvalid={errors.password}>
                        <FormLabel htmlFor='price'>Senha: </FormLabel>
                        <Input id='password' type='text' bg="#FFF" {...register('password')} value={passwordValue}/>
                        {errors.password && (<FormErrorMessage color="red">{errors.password.message}</FormErrorMessage>)}
                        <Button
                                mt={2}
                                colorScheme='blue'
                                onClick={() => { handleSetPassword() }}
                            >
                                Gerar senha forte
                            </Button>
                    </FormControl>

                </SimpleGrid>
            </VStack>

            <Flex mt="8" justify="flex-end">
                <HStack spacing="4">
                <Link to="/users">
                    <Button colorScheme="blackAlpha">Cancelar</Button>
                </Link>
                <Button
                    type="submit"
                    bg="#294A97"
                    color="#FFF"
                    _hover={{
                        filter: 'brightness(0.9)'
                    }}
                    isLoading={isSubmitting}
                >
                    Cadastrar
                </Button>
                </HStack>
            </Flex>

          </Box>
        </Flex>
      </Box>
    );
  }
  
