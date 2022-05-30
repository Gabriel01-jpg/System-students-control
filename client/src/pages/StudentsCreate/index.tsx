import {
    Box,
    Flex,
    Heading,
    Button,
    Icon,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Checkbox,
    Text,
    useBreakpointValue,
    Spinner,
    Divider,
    SimpleGrid,
    VStack,
    HStack,
    Input,
    FormControl,
    FormLabel,
    Select

  } from "@chakra-ui/react";

import { RiAddLine, RiRefreshLine } from "react-icons/ri";
import { useState } from "react";

import { Header } from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import { Link } from "react-router-dom";
  
  
  export default function StudentsCreate() {

    const isWideVersion = useBreakpointValue({
      base: false,
      lg: true,
    });
    
    return (
      <Box>
        <Header />
  
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={["4", "4,", "6"]}>
          <Sidebar />
          <Box flex="1" bg="gray.100" p={8} borderRadius={8} as="form">
            <Flex mb="4" justify="space-between" align="center">
                <Heading size="lg" fontWeight="normal">
                    Cadastro de alunos
                </Heading>
            </Flex>
            <Divider my="4" borderColor="gray.400" />
            <VStack spacing="6" >
                <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                    <FormControl>
                        <FormLabel htmlFor='course'>Nome: </FormLabel>
                        <Input id='course' type='text' name="course" variant="outline" bg="#FFF"/>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='price'>Sobrenome: </FormLabel>
                        <Input id='price' type='text' name="price" bg="#FFF"/>
                    </FormControl>

                </SimpleGrid>
                <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                    <FormControl>
                        <FormLabel htmlFor='course'>Email: </FormLabel>
                        <Input id='course' type='text' name="course" variant="outline" bg="#FFF"/>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='price'>Senha: </FormLabel>
                        <Input id='price' type='text' name="price" bg="#FFF"/>
                        <Button
                                mt={2}
                                colorScheme='blue'
                            >
                                Gerar senha forte
                            </Button>
                    </FormControl>

                </SimpleGrid>
                <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <FormControl>
                    <FormLabel htmlFor='type'>Curso do aluno:</FormLabel>
                    <Select id='type' placeholder='Selecione o curso' bg="#FFF">
                        <option>Técnico em Eletrônica</option>
                        <option>Técnico em Eletrotécnica</option>
                        <option>Instalador de Energia</option>
                        <option>Eletricista Industrial</option>
                    </Select>
                    </FormControl>
                </SimpleGrid>
            </VStack>

            <Flex mt="8" justify="flex-end">
                <HStack spacing="4">
                <Link to="/students">
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
  
