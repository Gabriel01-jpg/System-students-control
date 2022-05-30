import {
    Box,
    Flex,
    Heading,
    Button,
    Text,
    Divider,
    SimpleGrid,
    VStack,
    HStack,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Select
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Header } from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import { Link } from "react-router-dom";


const schema = yup.object({
  course: yup.string().required('Por favor, inserir o valor.'),
  price: yup.string().required('Por favor, inserir o valor.'),
  type: yup.string().required('Por favor, inserir o valor.'),
});
  
export default function CoursesCreate() {

    const { register, handleSubmit, formState:{ errors } } = useForm({
      resolver: yupResolver(schema)
    });

    const onSubmit = handleSubmit(data => console.log(data));
    
    return (
      <Box>
        <Header />
  
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={["4", "4,", "6"]}>
          <Sidebar />
          <Box flex="1" bg="gray.100" p={8} borderRadius={8} as="form" onSubmit={onSubmit}>
            <Flex mb="4" justify="space-between" align="center">
                <Heading size="lg" fontWeight="normal">
                    Cadastro de curso
                </Heading>
            </Flex>
            <Divider my="4" borderColor="gray.400" />
            <VStack spacing="8" >
                <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                    <FormControl isInvalid={errors.course}>
                        <FormLabel htmlFor='course'>Nome do curso: </FormLabel>
                        <Input id='course' type='text' variant="outline" bg="#FFF" {...register("course")}/>
                        {errors.course && (<FormErrorMessage color="red">{errors?.course.message}</FormErrorMessage>)}
                    </FormControl>
                    <FormControl isInvalid={errors.price}>
                        <FormLabel htmlFor='price'>Valor da mensalidade: </FormLabel>
                        <Input id='price' type='text' bg="#FFF" {...register("price")}/>
                        {errors.price && <FormErrorMessage>{errors?.price.message}</FormErrorMessage>}
                    </FormControl>

                </SimpleGrid>
                <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <FormControl isInvalid={errors.type}>
                    <FormLabel htmlFor='type'>Tipo de curso:</FormLabel>
                    <Select id='type' placeholder='Selecione o tipo' bg="#FFF" {...register("type")}>
                        <option>Técnico</option>
                        <option>Profissionalizante</option>
                    </Select>
                    {errors.type && <FormErrorMessage>{errors.type.message}</FormErrorMessage>}
                    </FormControl>
                </SimpleGrid>
            </VStack>

            <Flex mt="8" justify="flex-end">
                <HStack spacing="4">
                <Link to="/courses">
                    <Button colorScheme="blackAlpha">Cancelar</Button>
                </Link>
                <Button
                    type="submit"
                    bg="#294A97"
                    color="#FFF"
                    _hover={{
                        filter: 'brightness(0.9)'
                    }}
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
  
