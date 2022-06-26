import {
    Box,
    Flex,
    Heading,
    Button,
    useBreakpointValue,
    Divider,
    SimpleGrid,
    VStack,
    HStack,
    Input,
    FormControl,
    FormLabel,
    Select
} from "@chakra-ui/react";

import { useEffect, useState } from "react";

import { Header } from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import { Link } from "react-router-dom";
import { generateRandomPassword } from "../../utils/generateRandomPassword";
import { api } from "../../services/api";
  
  
interface CourseProps {
    id: string;
    name: string;
    price: string;
    type: string;
    createdAt: string;
}


export default function StudentsCreate() {

    const [ passwordValue, setPasswordValue ] = useState('');
    const [ courses, setCourses ] = useState<CourseProps[]>([]);

    const isWideVersion = useBreakpointValue({
      base: false,
      lg: true,
    });

    function handleSetPassword(){
        const password = generateRandomPassword(12)
        setPasswordValue(password);

    }

    useEffect(() => {
        api.get('/courses').then(response => {
            let { courses } = response.data;
            setCourses(courses.map((course: any) => {
                return {
                    id: course.id,
                    name: course.name,
                    type: course.tipo_curso,
                    price: Number(course.valor_mensalidade).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2}),
                    createdAt: new Date(course.createdAt).toLocaleString('pt-BR', { dateStyle: 'long' })
                }
            }));
        })


    }, [])
    
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
                        <Input id='price' type='text' name="price" bg="#FFF" value={passwordValue}/>
                        <Button
                                mt={2}
                                colorScheme='blue'
                                onClick={() => { handleSetPassword() }}
                            >
                                Gerar senha forte
                            </Button>
                    </FormControl>

                </SimpleGrid>
                <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <FormControl>
                    <FormLabel htmlFor='type'>Curso do aluno:</FormLabel>
                    <Select id='type' placeholder='Selecione o curso' bg="#FFF">
                        {courses.map(course => {
                            return (
                                <option>{course.name}</option>
                            )
                        })}
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
  
